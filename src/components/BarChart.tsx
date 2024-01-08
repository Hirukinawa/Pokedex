import React from "react";
import ReactApexChart from "react-apexcharts";

interface BarChartProps {}

const BarChart: React.FC<BarChartProps> = () => {
  const chartOptions = {
    series: [
      {
        name: "Series 1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <div>
      <ReactApexChart series={chartOptions.series} height={350} />
    </div>
  );
};

export default BarChart;
