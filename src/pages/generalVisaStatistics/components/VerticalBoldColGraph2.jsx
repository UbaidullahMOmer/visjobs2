import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        {
          data: [95, 90, 70, 83, 60, 30],
          color: '#164ED4',
        },
      ]}
      height={420}
      xAxis={[{ data: ['CA', 'TX', 'NY', 'NJ', 'WA', 'MA'], scaleType: 'band', labelStyle: {color: '#4A4C56'} }]}
      yAxis={[{ data: [0, 100], scaleType: 'linear', labelStyle: {color: '#4A4C56'} }]} 
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}