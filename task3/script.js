function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;
    var convertedTemperature;
    
    if (unitInput === "celsius") {
      convertedTemperature = (temperatureInput * 9/5) + 32;
      document.getElementById("result").innerHTML = convertedTemperature + "°F";
    } else if (unitInput === "fahrenheit") {
      convertedTemperature = (temperatureInput - 32) * 5/9;
      document.getElementById("result").innerHTML = convertedTemperature + "°C";
    } else if (unitInput === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      document.getElementById("result").innerHTML = convertedTemperature + " K";
    }
  }
  