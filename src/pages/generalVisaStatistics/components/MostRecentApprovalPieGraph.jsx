import { PieChart } from "@mui/x-charts";
import React from "react";

function MostRecentApprovalPieGraph() {
  const palette = [
    "#F3617C",
    "#63B3FF",
    "#FFDB5A",
    "#4ED5BD",
    "#4571DD",
    "#FDAE5A",
  ];
  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 30 },
              { id: 1, value: 40 },
              { id: 2, value: 22 },
              { id: 3, value: 28 },
              { id: 4, value: 5 },
              { id: 5, value: 20 },
            ],
          },
        ]}
        colors={palette}
        width={400}
        height={400}
      />
       {/* <img src="./images/graphs/pieGraph.png" className="" alt="" /> */}
    </>
  );
}

export default MostRecentApprovalPieGraph;
