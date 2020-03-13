<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <title>Показатели</title>
</head>
<body>
    <div id='main' class="d-flex flex-column">
        <div class='d-flex flex-column col-md-12 col-sm-12 col-xs-12 p-2'>
            <span class="d-block p-2 bg-primary text-white text-center text-uppercase">Показания счётчиков</span>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <div class="col-md-4 col-sm-4 col-xs-6 p-2">
              <select id='floor' onchange='getFlats()' class="browser-default custom-select">
                  <option>Выберите этаж</option>
                  <?php for ($i = 2; $i < 26; $i++): ?>
                  <option value='<?php echo $i; ?>'><?php echo $i; ?> этаж</option>
                  <?php endfor; ?>
              </select>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-6 p-2">
              <select id='section' onchange='getFlats()' class="browser-default custom-select">
                  <option>Выберите секцию</option>
                  <option value='1'>1 секция</option>
                  <option value='2'>2 секция</option>
              </select>
            </div>
        </div>

        <div id='meters' class='d-flex flex-column col-md-12 col-sm-12 col-xs-12 p-2'>

            <div id='el_meter' class='d-flex flex-column col-md-12 col-sm-12 col-xs-12 p-2'>
              <span class="d-block p-2 bg-primary text-white">Электричество</span>
              <?php for ($i = 1; $i < 7; $i++): ?>
              <div>
                  <p name='flat' class="text-dark p-2 m-1"></p>
                  <input type="number" step="any" name="el_day_data" required placeholder="Дневной тариф">
                  <input type="number" step="any" name="el_night_data" required placeholder="Ночной тариф">
              </div>
              <?php endfor; ?>

            </div>

            <div id='water_meter' class='d-flex flex-column col-md-12 col-sm-12 col-xs-12 p-2'>
              <span class="d-block p-2 bg-primary text-white">Водоснабжение</span>
              <?php for ($i = 1; $i < 7; $i++): ?>
              <div>
                  <p name='flat' class="text-dark p-2 m-1"></p>
                  <!-- <input type="number" step="any" name="cold_water" required placeholder="ХВС" onchange="getFloat(this)">
                  <input type="number" step="any" name="hot_water" required placeholder="ГВС" onchange="getFloat(this)"> -->
                  <input type="number" step="any" name="cold_water" required placeholder="ХВС">
                  <input type="number" step="any" name="hot_water" required placeholder="ГВС">
              </div>
              <?php endfor; ?>
            </div>

            <div id='heat_meter' class='d-flex flex-column col-md-12 col-sm-12 col-xs-12 p-2'>
              <span class="d-block p-2 bg-primary text-white">Теплоснабжение</span>
              <?php for ($i = 1; $i < 7; $i++): ?>
              <div>
                  <p name='flat' class="text-dark p-2 m-1"></p>
                  <input type="number" step="any" name="heat" required placeholder="Тепло">
              </div>
              <?php endfor; ?>
            </div>
            <div class="d-flex flex-row justify-content-end">
                <input id='sendDataButton' class="btn btn-danger m-1" type="button" value="Отправить показания счётчиков">
            </div>
            <p id='answer'></p>
        </div>
    </div>
    <script src="/js/meter.js"></script>
</body>
</html>
