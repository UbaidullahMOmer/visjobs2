import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function MmaangCaseGraph() {
  return (
    <>
      <LineChart
        xAxis={[
          {
            type: 'category',
            data: ["2019", "2020", "2021", "2022", "2023", "2024"],
            label: 'Year',
          }
        ]}
        yAxis={[
          {
            type: 'value',
            data: [10, 20, 30, 40, 50, 60, 70, 80],
            label: 'Value',
          }
        ]}
        series={[
          {
            color: "#4ED5BD",
            smooth: true,
            data: [20, 30, 20, 40, 30, 70],
          },
          {
            color: "#F3617C",
            smooth: true,
            data: [10, 15, 20, 25, 20, 25],
          },
          {
            color: "#FFD540",
            smooth: true,
            data: [40, 50, 47, 40, 60, 30],
          },
        ]}
        height={560}
        borderRadius={5}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
        tooltip={{ show: true }}
      />
      {/* <img src="./images/graphs/lineGraphVertical.png" className="" alt="" /> */}
    </>
  );
}

export default MmaangCaseGraph;
