
document
  .getElementById("search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const apiKey = "090b56fa73508717eba72ee068ec4a92"; 
    const city = document.getElementById("search-form-docu").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      document.getElementById("city").textContent = data.name;
      document.getElementById("temperature").textContent = `${Math.round(
        data.main.temp
      )}°C`;
      document.getElementById("weather-description").textContent =
        data.weather[0].description;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
      document.getElementById("wind-speed").textContent = `${Math.round(
        data.wind.speed
      )} km/h`;
      document.getElementById(
        "weather-icon"
      ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } catch (error) {
      alert(error.message);
    }
  });


