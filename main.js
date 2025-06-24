const app = document.querySelector('.weather-site');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const uvOutput = document.querySelector('.uvindex');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');






function fetchWeatherData() {

    
    fetch(`http://api.weatherapi.com/v1/current.json?key=api_key&q=${cityInput}`).then(response => response.json()).then(data => {
        console.log(data);

    })
}

fetchWeatherData();

