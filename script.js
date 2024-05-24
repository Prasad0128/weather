const btn = document.getElementById('searchBtn');
const input = document.getElementById('cityEnter');

const city = document.getElementById('city');
const cityTemp = document.getElementById('cityTemp');
const cityHumidity = document.getElementById('cityHumidity');
const cityWind = document.getElementById('cityWind');
const weatherIcon = document.getElementById('weatherIcon');

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=dadfcb2cc07d4be3a51143409241405&q=${cityName}&aqi=yes`);
    return await promise.json();
}

btn.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    
    city.innerText = result.location.name;
    cityTemp.innerText = `${result.current.temp_c}°c`;
    cityHumidity.innerText = `${result.current.humidity}%`;
    cityWind.innerText = `${result.current.wind_kph} km/h`;
    weatherIcon.src = `https:${result.current.condition.icon}`;
});
