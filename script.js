    fetch('https://api.openweathermap.org/data/2.5/weather?q=Magdeburg,de&appid=aab0730ebc981d515103c53016368f9e')
    .then(response => response.json())

.then(data => {
    let celsius = data.main.temp - 273.15;
    document.getElementById('temperature').innerHTML = celsius.toFixed(1) + '°C';
    // Regen
    let rain;
    if (data.rain) {
        rain = data.rain['1h'];
    } else {
        rain = 'Kein Regen';
    }
    document.getElementById('rain').innerHTML = rain + ' mm / qm';

    // Windgeschwindigkeit
    let windSpeed = data.wind.speed;
    let windSpeedInKmh = windSpeed * 3.6;
    document.getElementById('wind-speed').innerHTML = 'Wind: ' + windSpeedInKmh.toFixed(0) + ' km/h';

    // Windböen
    let windGusts = parseFloat(data.wind.gust);
    // let windGustsInKmh = windGusts * 3.6;
    // document.getElementById('wind-gusts').innerHTML = 'Böen: ' + windGustsInKmh.toFixed(0) + 'km/h';
    if (!isNaN(windGusts)) {
        let windGustsInKmh = windGusts * 3.6;
        document.getElementById('wind-gusts').innerHTML = 'Böen: ' + windGustsInKmh.toFixed(0) + 'km/h';
    } else {
        document.getElementById('wind-gusts').innerHTML = 'Böen: Keine Daten';
    }

    // Windrichtung
    let windDirection = data.wind.deg;
    let direction;
    if (windDirection >= 337.5 && windDirection <= 22.5) {
        direction = 'N';
    } else if (windDirection >= 22.5 && windDirection <= 67.5) {
        direction = 'NO';
    } else if (windDirection >= 67.5 && windDirection <= 112.5) {
        direction = 'O';
    } else if (windDirection >= 112.5 && windDirection <= 157.5) {
        direction = 'SO';
    } else if (windDirection >= 157.5 && windDirection <= 202.5) {
        direction = 'S';
    } else if (windDirection >= 202.5 && windDirection <= 247.5) {
        direction = 'SW';
    } else if (windDirection >= 247.5 && windDirection <= 292.5) {
        direction = 'W';
    } else if (windDirection >= 292.5 && windDirection <= 337.5) {
        direction = 'NW';
    }
    document.getElementById('wind-direction').innerHTML = 'Windrichtung: ' + direction;

    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    let iconElement = document.createElement('img');
    iconElement.setAttribute('src', iconUrl);
    document.getElementById('icon').appendChild(iconElement);

    // Luftfeuchtigkeit
    let humidity = data.main.humidity;
    document.getElementById('humidity').innerHTML = humidity;
    if (humidity < 50) {
        document.getElementById('message').innerHTML = 'Fenster öffnen!';
    } else if (humidity > 60) {
        document.getElementById('message').innerHTML = 'Fenster schließen!';
    } else {
        document.getElementById('message').innerHTML = 'Fenster offen?';
    }

    // Luftdruck
    let pressure = data.main.pressure;
    document.getElementById('pressure').innerHTML = 'Luftdruck: ' + pressure.toFixed(0) + ' hPa';

    //abs. Feuchte berechnen





});



fetch('https://api.openweathermap.org/data/2.5/weather?q=Enkirch,de&appid=aab0730ebc981d515103c53016368f9e')
    .then(response => response.json())

.then(data => {
    let celsius = data.main.temp - 273.15;
    document.getElementById('temperature2').innerHTML = celsius.toFixed(1) + '°C';

    let iconCode2 = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode2}@2x.png`;
    let iconElement2 = document.createElement('img');
    iconElement2.setAttribute('src', iconUrl);
    document.getElementById('icon2').appendChild(iconElement2);

});

fetch('https://api.openweathermap.org/data/2.5/weather?q=Zempin,de&appid=aab0730ebc981d515103c53016368f9e')
    .then(response => response.json())

.then(data => {
    let celsius = data.main.temp - 273.15;
    document.getElementById('temperature3').innerHTML = celsius.toFixed(1) + '°C';

    let iconCode3 = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode3}@2x.png`;
    let iconElement3 = document.createElement('img');
    iconElement3.setAttribute('src', iconUrl);
    document.getElementById('icon3').appendChild(iconElement3);

});

fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.569600&lon=2.650100&appid=aab0730ebc981d515103c53016368f9e')
    .then(response => response.json())

.then(data => {
    let celsius = data.main.temp - 273.15;
    document.getElementById('temperature4').innerHTML = celsius.toFixed(1) + '°C';


    let iconCode4 = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode4}@2x.png`;
    let iconElement4 = document.createElement('img');
    iconElement4.setAttribute('src', iconUrl);
    document.getElementById('icon4').appendChild(iconElement4);
    // Regen
    let rain2;
    if (data.rain) {
        rain2 = data.rain['1h'];
    } else {
        rain2 = 'Kein Regen';
    }
    document.getElementById('rain2').innerHTML = rain2;

});
