let chart;

async function initializeChart() {
    const ctx = document.getElementById('dataChart').getContext('2d');
    
    const initialData = await fetchData();
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: initialData.labels,
            datasets: [{
                label: 'Sensor Data',
                data: initialData.values,
                borderColor: '#4CAF50',
                backgroundColor:'#C9E7CA',
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.1,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                  display: true,
                  text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
                }
              },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });

    setInterval(updateChart, 60000);
}

// app.js - Corrected time conversion
async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    
    // In fetchData function
    return {
        labels: data.map(item => {
            const utcDate = new Date(item.timestamp);
            // Remove manual offset addition and use proper timeZone
            return utcDate.toLocaleTimeString('en-BD', {
                timeZone: 'Asia/Dhaka',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
        }),
        values: data.map(item => item.value)
    };
}

async function updateChart() {
    const newData = await fetchData();
    
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.values;
    chart.update();
}

document.addEventListener('DOMContentLoaded', initializeChart);