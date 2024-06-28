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

function JobTitleDistributionGraph() {
  return (
    <>
      <BarChart
      borderRadius={5}
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "jobType" }]}
        series={[
          {
            dataKey: "salary",
            color: "#164ED4",
          },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </>
  );
}

export default JobTitleDistributionGraph;
