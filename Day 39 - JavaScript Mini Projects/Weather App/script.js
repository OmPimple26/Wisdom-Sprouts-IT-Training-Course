const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

const API_KEY = "266978d88a09ea36f9529fc772eab143";


// -------------------------
// Search by city
// -------------------------

searchBtn.addEventListener("click", function () {

    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    getWeatherByCity(city);
});


// Press Enter to search

cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


// -------------------------
// Get weather by city
// -------------------------

async function getWeatherByCity(city) {

    try {

        errorMessage.textContent = "Loading...";

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

        errorMessage.textContent = "";

    } catch (error) {

        errorMessage.textContent =
            "City not found. Please try again.";

    }
}


// -------------------------
// Current Location
// -------------------------

locationBtn.addEventListener("click", function () {

    errorMessage.textContent = "Finding your location...";

    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {

            const city = data.city;

            if (!city) {
                throw new Error("City not found");
            }

            getWeatherByCity(city);

        })
        .catch(error => {

            errorMessage.textContent =
                "Unable to find your current location.";

        });

});


// -------------------------
// Display Weather
// -------------------------

function displayWeather(data) {

    cityName.textContent =
        `${data.name}, ${data.sys.country}`;

    temperature.textContent =
        `${Math.round(data.main.temp)} °C`;

    description.textContent =
        data.weather[0].description;

    humidity.textContent =
        `${data.main.humidity}%`;

    windSpeed.textContent =
        `${data.wind.speed} m/s`;


    // Weather icon

    const iconCode = data.weather[0].icon;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    weatherIcon.alt =
        data.weather[0].description;
}