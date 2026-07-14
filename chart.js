// import chart from 'chart.js/auto'
// import { type } from 'express/lib/response';


 function chartTemp (times,temps){
  const wChart= document.getElementById('weatherChart').getContext('2d');
new Chart(wChart,{
    type:'line',
    data:{
        labels: times,
        datasets:[{
            label: 'Temperature (F)',
            data: temps,
            borderColor: '#376482',
            backgroundColor: '#666964',
            fill: false,
            tension: 0.1

        }]
    },
    options: {
            scales: {
              x: {
                display: true,
                title: { display: true, text: 'Time' }
              },
              y: {
                display: true,
                title: { display: true, text: 'Temperature (°F)' }
              }
            }
          }
        });
}

