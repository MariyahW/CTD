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
                title: { display: true, text: 'Time' },
                ticks: {
                  autoSkip: true,
                  maxRotation: 45,
                  minRotation: 45,
                  callback: function(value, index) {
                      const label = this.getLabelForValue(value);
                    
                    const [datePart, timePart] = label.split('T');
                    
                    if (timePart === '00:00') {
                        return datePart;
                    }
                    return null; // hide this tick
                  }
                }
              },
              y: {
                display: true,
                title: { display: true, text: 'Temperature (°F)' }
              }
            }
          }
        });
}

function chartpM (times,pm){
  const wChart= document.getElementById('pmChart').getContext('2d');
new Chart(wChart,{
    type:'line',
    data:{
        labels: times,
        datasets:[{
            label: 'Fine Particle Matter',
            data: pm,
            borderColor: '#376482',
            // backgroundColor: '#666964',
            fill: 'origin',
            tension: 0.1,
            segment: {
             backgroundColor: ctx => {
            const val = ctx.p1.parsed.y;
            if (val <= 12) return 'rgba(0, 228, 0, 0.3)';
            if (val <= 35.4) return 'rgba(255, 255, 0, 0.3)';
            if (val <= 55.4) return 'rgba(255, 126, 0, 0.3)';
            if (val <= 150.4) return 'rgba(255, 0, 0, 0.3)';
            return 'rgba(143, 63, 151, 0.3)';
        }
      }

        }]
    },
    options: {
            scales: {
              x: {
                display: true,
                title: { display: true, text: 'Time' },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                  callback: function(value, index) {
                      const label = this.getLabelForValue(value);
                    
                    const [datePart, timePart] = label.split('T');
                    
                    
                        return `${datePart} ${timePart}`;
                    
                    
                  }
                }
              },
              y: {
                display: true,
                title: { display: true, text: 'Particle Matter' }
              }
            }
          }
        });
}

function chartOzone (times,ozone){
  const wChart= document.getElementById('ozoneChart').getContext('2d');
new Chart(wChart,{
    type:'line',
    data:{
        labels: times,
        datasets:[{
            label: 'Ozone',
            data: ozone,
            borderColor: '#376482',
            // backgroundColor: '#666964',
            fill: 'origin',
            tension: 0.1,
            segment: {
             backgroundColor: ctx => {
            const val = ctx.p1.parsed.y;
            if (val <= 54) return 'rgba(0, 228, 0, 0.3)';
            if (val <= 70) return 'rgba(255, 255, 0, 0.3)';
            if (val <= 85) return 'rgba(255, 126, 0, 0.3)';
            if (val <= 105) return 'rgba(255, 0, 0, 0.3)';
            return 'rgba(143, 63, 151, 0.3)';
        }
      }

        }]
    },
    options: {
            scales: {
              x: {
                display: true,
                title: { display: true, text: 'Time' },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                  callback: function(value, index) {
                      const label = this.getLabelForValue(value);
                    
                    const [datePart, timePart] = label.split('T');
                    
                    
                        return `${datePart} ${timePart}`;
                    
                    
                  }
                }
              },
              y: {
                display: true,
                title: { display: true, text: 'Ozone' }
              }
            }
          }
        });
}
