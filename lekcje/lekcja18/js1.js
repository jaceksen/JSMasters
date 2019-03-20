searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    let cityName = searchCity.value;
    console.log(cityName);
    if(cityName.trim().length === 0) {
        loadingText.style.display = 'none';
        weatherBox.style.display = 'none';
        return alert('Wpisz coś sensownego.');
    }

    let http = new XMLHttpRequest();
    let apiKey = '63dfea3b9da772e03b1fb911bde79856';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    let method = 'GET';

    http.open(method, url);

    http.onreadystatechange = () => {
        // console.log(http.status);
        // console.log(http.readyState);
        if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            let data = JSON.parse(http.responseText);
            console.log(data);
            let weatherData = new Weather(cityName, data.weather[0].description.toUpperCase(), data.sys.country);

            weatherData.temperature = data.main.temp;

            updateWeather(weatherData);

        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200){
            loadingText.style.display = 'none';
            weatherBox.style.display = 'none';
            searchCity.value = '';
            alert('Nie mogłem pobrać danych');
        }
    };

    http.send();
}   

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName + ' (' + weatherData.country + ')';
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    // console.log(weatherTemperature);
    weatherTemperature.insertAdjacentHTML('beforeend', '&#8451;');
    kraj.textContent = weatherData.country;
    searchCity.value = '';
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}