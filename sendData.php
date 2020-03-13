<?php
$server = '127.0.0.1';
$db = 'meter';
$login = 'ignatova';
$pwd = 'ignatova13';
$charset = 'utf8';
$dsn = "mysql:host=$server;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$pdo = new PDO($dsn, $login, $pwd, $options);

$meters = json_decode($_POST['meter_json'], false, 512, JSON_OBJECT_AS_ARRAY);

foreach ($meters as $meter){
    $cdate = date("Y-m-d h:i:s");
    $year = date("Y");
    $month = date("m");
    $flat = $meter[0];
    $el_day = $meter[1];
    $el_night = $meter[2];
    $cold_water = $meter[3];
    $hot_water = $meter[4];
    $heat = $meter[5];
    $sql = "INSERT INTO meters (cdate, flat, el_day, el_night, cold_water, hot_water, heat)
    SELECT * FROM (SELECT NOW() as cdate, :flat as flat, :el_day as el_day, :el_night as el_night, :cold_water as cold_water, :hot_water as hot_water, :heat as heat) AS tmp
    WHERE NOT EXISTS (SELECT * FROM meters WHERE flat = :flat AND DATE_FORMAT(cdate,'%Y') = :year AND DATE_FORMAT(cdate,'%m') = :month) LIMIT 1";
    try {
    $pdo->beginTransaction();
    $prepared = $pdo->prepare($sql);
    $params = [
        'cdate' => $cdate,
        'year' => $year,
        'month' => $month,
        'flat' => $flat,
        'el_day' => $el_day,
        'el_night' => $el_night,
        'cold_water' => $cold_water,
        'hot_water' => $hot_water,
        'heat' => $heat
    ];
    $prepared->execute($params);
    $pdo->commit();
    } catch (Exception $e) {
    $pdo->rollBack();
    echo "Данные не были добавлены. Ошибка " . $e->getMessage();
    }
}
