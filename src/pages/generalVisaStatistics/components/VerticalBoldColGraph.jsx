import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        {
          data: [25, 50, 75, 85, 90, 73],
          color: '#164ED4',
        },
      ]}
      height={420}
      xAxis={[{ data: ['60-70K', '70-80K', '80-90K', '90-100K', '100-110K', '110-120'], scaleType: 'band', labelStyle: {color: '#4A4C56'} }]}
      yAxis={[{ data: [0, 100], scaleType: 'linear', labelStyle: {color: '#4A4C56'} }]} 
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
} 