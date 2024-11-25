'use client';

import styles from '@/app/components/Charts/Chart.module.scss';
import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Sector,
  PieLabelRenderProps,
  SectorProps,
} from 'recharts';
import { ActiveShape } from 'recharts/types/util/types';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

interface PieDataEntry {
  name: string;
  value: number;
  color: string;
  level: number;
}

const pieData: PieDataEntry[] = [
  { name: 'Bill Expense', value: 15, color: '#FC7900', level: 6 },
  { name: 'Entertainment', value: 25, color: '#343C6A', level: 3 },
  { name: 'Investment', value: 35, color: '#396AFF', level: 1 },
  { name: 'Others', value: 25, color: '#232323', level: 3 },
];

const activeIndices = pieData
  .map((entry, index) => (entry.level > 1 ? index : null))
  .filter((index): index is number => index !== null);

const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    payload,
  } = props;
  const value = payload.value as number;
  const name = payload.name as string;

  const RADIAN = Math.PI / 180;
  const radius =
    (innerRadius as number) +
    ((outerRadius as number) - (innerRadius as number)) * 0.5;
  const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN);
  const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Inter', sans-serif"
      fontSize={12}
      fontWeight={700}
    >
      <tspan x={x} dy="-0.5em">{`${value}%`}</tspan>
      <tspan x={x} dy="1.2em">
        {name}
      </tspan>
    </text>
  );
};

const renderActiveShape = (props: SectorProps & { payload: PieDataEntry }) => {
  const {
    cx = 0,
    cy = 0,
    innerRadius = 0,
    outerRadius = 0,
    startAngle = 0,
    endAngle = 0,
    fill,
    payload,
  } = props;

  const adjustedOuterRadius = outerRadius + 5 * payload.level;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={adjustedOuterRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      stroke="#FFFFFF"
      strokeWidth={5}
    />
  );
};

const PieChart = () => {
  return (
    <div className={styles.pieChartContainer}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            labelLine={false}
            label={renderCustomizedLabel}
            activeIndex={activeIndices}
            activeShape={renderActiveShape as ActiveShape<PieSectorDataItem>}
            stroke="#FFFFFF"
            strokeWidth={5}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: '12px',
              border: '1px solid #e6eff5'
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
