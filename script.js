// const axios = require("axios");

let lat,long;
const citySelect = document.getElementById("citySelect");
const typeSelect = document.getElementById('typeSelect');
citySelect.addEventListener('change', function(){

    const val=this.value;
    if(val){
        [lat,long]=val.split(',').map(Number);
        typeSelect.style.display='inline'
        
    }else{
        typeSelect.style.display='none'
    }
});


typeSelect.addEventListener('change', function(){
    const type=this.value;
    if (type && lat&&long){
        let page='';
        if (type==='forecast')page='forecast.html';
        if (type==='weather')page='weather.html';
        if (type==='air')page='air.html';

        window.location.href='https://www.example.com'
        // window.location.href=`${page}?lat=${lat}&long=${long}`;
    }
})

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


