import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset } from "../dataset/weather.ts";

const chartSetting = {
  xAxis: [
    {
      label: "",
    },
  ],
  width: 740,
  height: 460,
};

const valueFormatter = (value) => `${value}mm`;

function JobTitleDistributionGraph() {
  const data = [
    { jobTitle: "Engineer", count: 120 },
    { jobTitle: "Manager", count: 80 },
    { jobTitle: "Developer", count: 150 },
    { jobTitle: "Designer", count: 70 },
  ];

  const series = [
    {
      dataKey: "count",
      name: "Count",
      type: "bar",
      color: "#164ED4",
    },
  ];

  return (
    <>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          {
            dataKey: "seoul",
            // label: "Seoul rainfall",
            valueFormatter,
            color: "#164ED4",
            barSize: 2,
          },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
      {/* <img
        src="./images/graphs/lineHorizental.png"
        className="h-[460px]"
        alt=""
      /> */}
    </>
  );
}

export default JobTitleDistributionGraph;
