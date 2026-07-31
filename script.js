// const axios = require("axios");

let lat, long;
const citySelect = document.getElementById("citySelect");
const typeSelect = document.getElementById("typeSelect");

if (citySelect && typeSelect) {
  citySelect.addEventListener("change", function () {
    const val = this.value;
    if (val) {
      [lat, long] = val.split(",").map(Number);
      typeSelect.style.display = "inline";
    } else {
      typeSelect.style.display = "none";
    }
  });

  typeSelect.addEventListener("change", function () {
    const type = this.value;
    if (type && lat && long) {
      let page = "";
      if (type === "forecast") page = "forecast.html";
      if (type === "weather") page = "weather.html";
      if (type === "air") page = "air.html";

      window.location.href = `${page}?lat=${lat}&long=${long}`;
    }
  });
}
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const currentParams = new URLSearchParams(window.location.search);
    const destination = this.getAttribute("href");
    window.location.href = `${destination}?${currentParams.toString()}`;
  });
});

async function forecast(lat, long) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
  try {
    const response = await axios.get(url);
    times = response.data.hourly.time;
    temps = response.data.hourly.temperature_2m;
    chartTemp(times, temps);
  } catch (err) {
    console.log(`Sorry, something went wrong:${err.message}`);
  }
}

async function current(lat, long) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m&forecast_days=1&temperature_unit=fahrenheit`;
  const contain = document.getElementById("currentTemp");
  try {
    const response = await axios.get(url);
    
    // console.log(response);
    let pass = response.data.current;
    const [datePart, timePart] = pass.time.split("T");
    contain.innerHTML = `<h2>Date: ${datePart}</h2>
        <h2>Time: ${timePart}</h2>
        <h2>Temperature: ${pass.temperature_2m}</h2>`;
  } catch (err) {
    console.log(`Sorry, something went wrong:${err.message}`);
  }
}

async function air(lat,long){
    const url=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=pm2_5,ozone`;
    try{
        const response = await axios.get(url);
        chartpM(response.data.hourly.time, response.data.hourly.pm2_5);
        // chartOzone(response.data.hourly.time, response.data.ozone);


    }catch(err){
        console.log(err.message)
    }
}
