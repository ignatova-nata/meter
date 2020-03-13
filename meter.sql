CREATE DATABASE IF NOT EXISTS meter;
USE meter;

CREATE TABLE IF NOT EXISTS meters (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
cdate DATETIME NOT NULL,
flat INT NOT NULL,
el_day FLOAT(7,4) NOT NULL,
el_night FLOAT(7,4) NOT NULL,
cold_water FLOAT(7,4) NOT NULL,
hot_water FLOAT(7,4) NOT NULL,
heat FLOAT(7,4) NOT NULL
)ENGINE=InnoDB
DEFAULT CHARSET='utf8mb4';
-- DROP TABLE meters;

INSERT INTO meters (cdate, flat, el_day, el_night, cold_water, hot_water, heat) 
VALUES (NOW(), 666, 12.24, 12.24, 12.24, 12.24, 12.24);

SELECT * FROM meters;

INSERT INTO meters SELECT * FROM (SELECT NOW() as cdate, 1000 as flat, 3 as el_day, 3 as el_night, 3 as cold_water, 3 as hot_water, 3 as heat) AS tmp
WHERE NOT EXISTS (SELECT * FROM meters WHERE flat = 1000 AND DATE_FORMAT(cdate,'%Y') = 2020 AND DATE_FORMAT(cdate,'%m') = 3) LIMIT 1;
