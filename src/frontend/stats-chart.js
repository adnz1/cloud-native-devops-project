// Simple Chart.js traffic chart with mock data
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('trafficChart');
  if (!ctx) return;
  // set canvas height to match CSS container
  ctx.width = ctx.clientWidth;
  ctx.height = 220;

  const data = {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Visitors',
      data: [120, 200, 170, 240, 300, 280, 330],
      fill: true,
      backgroundColor: 'rgba(47,87,85,0.08)',
      borderColor: '#2F5755',
      tension: 0.32,
      pointRadius: 3,
      pointBackgroundColor: '#2F5755'
    }]
  };

  const config = {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: '#432323' } },
        y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#432323' } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  };

  new Chart(ctx, config);
});
