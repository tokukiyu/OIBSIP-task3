document.getElementById("convertBtn").addEventListener("click", function() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var unitSelect = document.getElementById("unitSelect").value;
  
  if (isNaN(temperatureInput)) {
    document.getElementById("result").textContent = "Please enter a valid temperature.";
    return;
  }
  
  var convertedTemperature;
  
  if (unitSelect === "celsius") {
    convertedTemperature = convertToCelsius(temperatureInput);
  } else if (unitSelect === "fahrenheit") {
    convertedTemperature = convertToFahrenheit(temperatureInput);
  } else if (unitSelect === "kelvin") {
    convertedTemperature = convertToKelvin(temperatureInput);
  }
  
  document.getElementById("result").textContent = "Converted temperature: " + convertedTemperature + " " + unitSelect;
});

function convertToCelsius(temperature) {
  return ((temperature - 32) * 5 / 9).toFixed(2);
}

function convertToFahrenheit(temperature) {
  return ((temperature * 9 / 5) + 32).toFixed(2);
}

function convertToKelvin(temperature) {
  return (parseFloat(temperature) + 273.15).toFixed(2);
}
