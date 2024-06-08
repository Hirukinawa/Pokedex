/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Status } from "../App";
import { formataName } from "../Utils/Utils";
import { ApexOptions } from "apexcharts";

interface LateralBarChartProps {
  stats: Status[];
}

const LateralBarChart: React.FC<LateralBarChartProps> = ({ stats }: LateralBarChartProps) => {
  const chartOptions: ApexOptions = {
      
    series: [{
        name: "",
        data: stats.map((stat: Status) => {
          return stat.base_stat;
        }),
      },],
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: stats.map((stat: Status) => {
          return formataName(stat.stat.name);
        }),
      }
  
  
  };
   /* {
    chart: {
      type: "bar",
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
  }; */

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        className="statuBar"
      />
    </div>
  );
};

export default LateralBarChart;


/* class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              borderRadiusApplication: 'end',
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  const domContainer = document.querySelector('#app');
  ReactDOM.render(React.createElement(ApexChart), domContainer); */