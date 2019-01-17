function Weather(cityName, description, country) {
    this.cityName = cityName;
    this.description = description;
    this.country = country;
    this._temperature = '';
} 

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
        // this._temperature = value;
    }
});