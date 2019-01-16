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

}   