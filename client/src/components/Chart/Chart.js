import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, plugins } from "chart.js/auto";

function Chart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        scales: {
          x: {
            ticks: {
              font: {
                size: 18,
              },
            },
          },
          y: {
            ticks: {
              font: {
                size: 18,
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 18,
              },
            },
          },
        },
      }}
    />
  );
}

export default Chart;
