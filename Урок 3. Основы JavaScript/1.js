function convertTemperature() {
    var celsius = document.getElementById("celsius-input").value;
    var fahrenheit = (9 / 5) * celsius + 32;
    fahrenheit = Math.round(fahrenheit * 10) / 10;
    alert("Celsius: " + celsius + ", Fahrenheit: " + fahrenheit);
  }