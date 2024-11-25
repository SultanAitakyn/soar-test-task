'use client';
import styles from '@/app/components/Charts/Chart.module.scss';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { month: 'Jul', value: 100 },
  { month: 'Aug', value: 300 },
  { month: 'Sep', value: 500 },
  { month: 'Oct', value: 800 },
  { month: 'Nov', value: 400 },
  { month: 'Dec', value: 600 },
  { month: 'Jan', value: 700 },
];

const LineChart = () => {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2D60FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#DFE5EE" />
          <XAxis
            dataKey="month"
            tick={{ fill: '#718EBF', fontSize: 14 }}
            axisLine={{ stroke: '#DFE5EE', strokeDasharray: '3 3' }}
          />
          <YAxis
            tick={{ fill: '#718EBF', fontSize: 14 }}
            axisLine={{ stroke: '#DFE5EE', strokeDasharray: '3 3' }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1814F3"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1814F3"
            strokeWidth={3}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
