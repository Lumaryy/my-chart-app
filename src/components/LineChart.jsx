let midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
      {
        label: 'Beneficios',
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255, 99, 132)',
        pointBackgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: 'Otra línea',
        data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
      },
    ],
  }