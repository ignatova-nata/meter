const SUCCESS = "Показатели счётчиков добавлены.";
const ERROR = "Заполните все данные показателей счётчиков перед отправкой.";
let sendDataButton = document.getElementById('sendDataButton');
let answer = document.getElementById('answer');
let floor = document.getElementById('floor');
let section = document.getElementById('section');
let meters = document.getElementById('meters');
meters.setAttribute('class','d-none');
let el_meter = document.getElementById('el_meter');
let water_meter = document.getElementById('water_meter');
let heat_meter = document.getElementById('heat_meter');
let inp_el_day = document.getElementsByName('el_day_data');
let inp_el_night = document.getElementsByName('el_night_data');
let flat_el = el_meter.querySelectorAll('p');
let div_el = el_meter.querySelectorAll('div');
let inp_water_cold = document.getElementsByName('cold_water');
let inp_water_hot = document.getElementsByName('hot_water');
let flat_water = water_meter.querySelectorAll('p');
let div_water = water_meter.querySelectorAll('div');
let inp_heat = heat_meter.querySelectorAll('input[type="number"]');
let flat_heat = heat_meter.querySelectorAll('p');
let div_heat = heat_meter.querySelectorAll('div');
let countErrors = 0;

function getFlats(){
    if(floor.options[floor.selectedIndex].value !== 'Выберите этаж'){
        if(section.options[section.selectedIndex].value !== 'Выберите секцию'){
            meters.setAttribute('class','d-flex flex-column col-md-12 col-sm-12 col-xs-12 p-2');
            if(section.options[section.selectedIndex].value == '1'){
                countErrors = 0;
                for (let i = 0; i < 6; i++) {
                   flat_el[i].innerHTML = 'Квартира № ' + ((Number(floor.options[floor.selectedIndex].value) - 2)*10 + i+1);
                   flat_water[i].innerHTML = 'Квартира № ' + ((Number(floor.options[floor.selectedIndex].value) - 2)*10 + i+1);
                   flat_heat[i].innerHTML = 'Квартира № ' + ((Number(floor.options[floor.selectedIndex].value) - 2)*10 + i+1);
                   div_el[i].setAttribute('class','d-flex flex-row justify-content-end');
                   inp_el_day[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   inp_el_night[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   div_water[i].setAttribute('class','d-flex flex-row justify-content-end');
                   inp_water_cold[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   inp_water_hot[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   div_heat[i].setAttribute('class','d-flex flex-row justify-content-end');
                   inp_heat[i].setAttribute('class', 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1');
                   inp_el_day[i].value = '';
                   inp_el_night[i].value = '';
                   inp_water_cold[i].value = '';
                   inp_water_hot[i].value = '';
                   inp_heat[i].value = '';
                 }
            }
            if(section.options[section.selectedIndex].value == '2'){
                countErrors = 0;
                for (let i = 0; i < 4; i++) {
                   flat_el[i].innerHTML = 'Квартира № ' + ((Number(floor.options[floor.selectedIndex].value) - 2)*10 + i+7);
                   flat_water[i].innerHTML = 'Квартира № ' + ((Number(floor.options[floor.selectedIndex].value) - 2)*10 + i+7);
                   flat_heat[i].innerHTML = 'Квартира № ' + ((Number(floor.options[floor.selectedIndex].value) - 2)*10 + i+7);
                   div_el[i].setAttribute('class','d-flex flex-row justify-content-end');
                   inp_el_day[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   inp_el_night[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   div_water[i].setAttribute('class','d-flex flex-row justify-content-end');
                   inp_water_cold[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   inp_water_hot[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1');
                   div_heat[i].setAttribute('class','d-flex flex-row justify-content-end');
                   inp_heat[i].setAttribute('class', 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1');
                   inp_el_day[i].value = '';
                   inp_el_night[i].value = '';
                   inp_water_cold[i].value = '';
                   inp_water_hot[i].value = '';
                   inp_heat[i].value = '';
                 }
                 for (let i = 4; i < 6; i++) {
                    div_el[i].setAttribute('class','d-none');
                    div_water[i].setAttribute('class','d-none');
                    div_heat[i].setAttribute('class','d-none');
                  }
            }
        } else {
            meters.setAttribute('class','d-none');
        }
    } else {
        meters.setAttribute('class','d-none');
    }
}

function validateData(){
    if(section.value == '1'){
        for (let i = 0; i < 6; i++) {
          inp_el_day[i].value !='' && inp_el_day[i].valueAsNumber !='NaN'
          ? inp_el_day[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? (countErrors--,
                inp_el_day[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
              : countErrors
            : inp_el_day[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? countErrors
              : (countErrors++,
                inp_el_day[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

        inp_el_night[i].value !='' && inp_el_night[i].valueAsNumber !='NaN'
        ? inp_el_night[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
            ? (countErrors--,
              inp_el_night[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
            : countErrors
          : inp_el_night[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
            ? countErrors
            : (countErrors++,
              inp_el_night[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

          inp_water_cold[i].value !='' && inp_water_cold[i].valueAsNumber != 'NaN'
            ? inp_water_cold[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? (countErrors--,
                inp_water_cold[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
              : countErrors
            : inp_water_cold[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? countErrors
              : (countErrors++,
                inp_water_cold[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

          inp_water_hot[i].value !='' && inp_water_hot[i].valueAsNumber != 'NaN'
            ? inp_water_hot[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? (countErrors--,
                inp_water_hot[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
              : countErrors
            : inp_water_hot[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? countErrors
              : (countErrors++,
                inp_water_hot[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

          inp_heat[i].value != '' && inp_heat[i].valueAsNumber != 'NaN'
            ? inp_heat[i].getAttribute('class') == 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1 error'
              ? (countErrors--,
                inp_heat[i].setAttribute('class', 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1'))
              : countErrors
            : inp_heat[i].getAttribute('class') == 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1 error'
              ? countErrors
              : (countErrors++,
                inp_heat[i].setAttribute('class', 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1 error'))
        }
    }
    if(section.value == '2'){
        for (let i = 0; i < 4; i++) {
          inp_el_day[i].value !='' && inp_el_day[i].valueAsNumber !='NaN'
            ? inp_el_day[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
                ? (countErrors--,
                  inp_el_day[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
                : countErrors
              : inp_el_day[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
                ? countErrors
                : (countErrors++,
                  inp_el_day[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

          inp_el_night[i].value !='' && inp_el_night[i].valueAsNumber !='NaN'
          ? inp_el_night[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? (countErrors--,
                inp_el_night[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
              : countErrors
            : inp_el_night[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
              ? countErrors
              : (countErrors++,
                inp_el_night[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

            inp_water_cold[i].value !='' && inp_water_cold[i].valueAsNumber != 'NaN'
              ? inp_water_cold[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
                ? (countErrors--,
                  inp_water_cold[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
                : countErrors
              : inp_water_cold[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
                ? countErrors
                : (countErrors++,
                  inp_water_cold[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

            inp_water_hot[i].value !='' && inp_water_hot[i].valueAsNumber != 'NaN'
              ? inp_water_hot[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
                ? (countErrors--,
                  inp_water_hot[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1'))
                : countErrors
              : inp_water_hot[i].getAttribute('class') == 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'
                ? countErrors
                : (countErrors++,
                  inp_water_hot[i].setAttribute('class', 'text-dark col-md-4 col-sm-4 col-xs-4 p-2 m-1 error'))

            inp_heat[i].value != '' && inp_heat[i].valueAsNumber != 'NaN'
              ? inp_heat[i].getAttribute('class') == 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1 error'
                ? (countErrors--,
                  inp_heat[i].setAttribute('class', 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1'))
                : countErrors
              : inp_heat[i].getAttribute('class') == 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1 error'
                ? countErrors
                : (countErrors++,
                  inp_heat[i].setAttribute('class', 'text-dark col-md-8 col-sm-8 col-xs-8 p-2 m-1 error'))
        }
    }
    if(countErrors > 0) {
        return false;
    }
    return true;
}

function sendData(){
    event.preventDefault();
    if (!validateData()){
        let mark = document.createElement('mark');
        mark.innerHTML = ERROR;
        let m1 = answer.getElementsByTagName('mark')[0];
        if (m1) {
            answer.removeChild(m1);
        }
        answer.appendChild(mark);
        return ERROR;
    }
    answer.innerHTML = '';
    let meter = [];

    if(section.value == '1'){
        for (let i = 0; i < 6; i++) {
            meter.push([parseInt(flat_el[i].textContent.replace('Квартира № ', ''),10), parseFloat(inp_el_day[i].value.replace(',', '.')),
            parseFloat(inp_el_night[i].value.replace(',', '.')), parseFloat(inp_water_cold[i].value.replace(',', '.')),
            parseFloat(inp_water_hot[i].value.replace(',', '.')), parseFloat(inp_heat[i].value.replace(',', '.'))]);
        }
    }
    if(section.value == '2'){
        for (let i = 0; i < 4; i++) {
          meter.push([parseInt(flat_el[i].textContent.replace('Квартира № ', ''),10), parseFloat(inp_el_day[i].value.replace(',', '.')),
          parseFloat(inp_el_night[i].value.replace(',', '.')), parseFloat(inp_water_cold[i].value.replace(',', '.')),
          parseFloat(inp_water_hot[i].value.replace(',', '.')), parseFloat(inp_heat[i].value.replace(',', '.'))]);
        }
    }
    let meter_json = JSON.stringify(meter);
    let request = new XMLHttpRequest();
    request.open('POST', "sendData.php", true);
    let FD = new FormData();
    FD.append('meter_json', meter_json);
    request.send(FD);
    request.onload = function(){
      console.log(request.status);
      console.log(request.responseText);
        if(request.status === 200){
            answer.innerText = floor.value + ' этаж. ' + section.value + ' секция. ' + SUCCESS;
        } else if (request.status !== 200){
            answer.innerText = floor.value + ' этаж. ' + section.value + ' секция. ' + ERROR;
        }
    }
}

sendDataButton.addEventListener("click", sendData);
