/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Status } from "../App";
import { formataName } from "../Utils/Utils";

interface BarChartProps {
  stats: Status[];
}

const BarChart: React.FC<BarChartProps> = ({ stats }: BarChartProps) => {
  const chartOptions = {
    // Define your chart options here
    chart: {
      type: "line",
    },
    series: [
      {
        name: "",
        data: stats.map((stat: Status) => {
          return stat.base_stat;
        }),
      },
    ],
    xaxis: {
      categories: stats.map((stat: Status) => {
        return formataName(stat.stat.name);
      }),
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={300}
        width={425}
      />
    </div>
  );
};

export default BarChart;
