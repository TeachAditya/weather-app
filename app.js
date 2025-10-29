const dummyWeatherData = {
  London: {
    name: "London",
    temp: 18,
    description: "Cloudy ☁️",
    humidity: 70,
    wind: 12
  },
  Paris: {
    name: "Paris",
    temp: 22,
    description: "Sunny ☀️",
    humidity: 50,
    wind: 8
  },
  Tokyo: {
    name: "Tokyo",
    temp: 26,
    description: "Rainy 🌧️",
    humidity: 80,
    wind: 15
  },
  Delhi: {
    name: "Delhi",
    temp: 30,
    description: "Hot 🔥",
    humidity: 40,
    wind: 10
  }
};

document.querySelector("button").addEventListener("click", () => {
  const cityInput = document.querySelector("input").value.trim();
  const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

  const data = dummyWeatherData[city];

  if (data) {
    document.querySelector(".weather-info h2").textContent = data.name;
    document.querySelector(".temperature").textContent = `${data.temp}°C`;
    document.querySelector(".description").textContent = data.description;
    document.querySelector(".details").textContent = `Humidity: ${data.humidity}% | Wind: ${data.wind} km/h`;
  } else {
    document.querySelector(".weather-info h2").textContent = "City not found";
    document.querySelector(".temperature").textContent = "--";
    document.querySelector(".description").textContent = "N/A";
    document.querySelector(".details").textContent = "";
  }
});