const axios = require("axios");

const dropdown = document.getElementById("citySelect");

async function forecast(lat, long) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;

  const response = await axios.get(url);
  console.log(response.data);
}
