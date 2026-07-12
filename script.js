const axios = require("axios");
// import * as charting from 'chart.js';

// const dropdown = document.getElementById("citySelect");

async function forecast(lat, long) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    try{
        const response = await axios.get(url);
        times=response.data.hourly.time;
        temps=response.data.hourly.temperature_2m;
        chartTemp(times,temps)
    }catch (err){
        console.log(`Sorry, something went wrong:${err.message}`)
    }
  
  
}

function chartTemp(times,temps){
    charting.newChart(times,temps)

}

forecast(40.7, -74.0);
