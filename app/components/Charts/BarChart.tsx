'use client';
import styles from '@/app/components/Charts/Chart.module.scss';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useMediaQuery } from 'react-responsive';

const BarChart = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isLarge = useMediaQuery({ query: '(max-width: 992px)' });

  const fontSize = isMobile ? 10 : isTablet ? 12 : 13;
  const barSize = isMobile ? 7 : (isTablet || isLarge) ? 10 : 15;
  const barGap = isMobile ? 2 : isTablet ? 10 : 12;

  const barData = [
    { day: 'Mon', deposit: 100, withdraw: 150 },
    { day: 'Tue', deposit: 200, withdraw: 100 },
    { day: 'Wed', deposit: 150, withdraw: 200 },
    { day: 'Thu', deposit: 300, withdraw: 250 },
    { day: 'Fri', deposit: 250, withdraw: 300 },
    { day: 'Sat', deposit: 400, withdraw: 200 },
    { day: 'Sun', deposit: 350, withdraw: 400 },
  ];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.legendContainer}>
        <div className={styles.legendItem}>
          <div className={styles.depositCircle}></div>
          Deposit
        </div>
        <div className={styles.legendItem}>
          <div className={styles.withdrawCircle}></div>
          Withdraw
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <RechartsBarChart data={barData} barGap={barGap}>
          <CartesianGrid stroke="#F3F3F5" horizontal={true} vertical={false} />
          <XAxis
            dataKey="day"
            tick={{
              fill: '#718EBF',
              fontFamily: 'Inter',
              fontSize: fontSize,
              fontWeight: 400,
              textAnchor: 'middle',
            }}
            axisLine={{ stroke: '#F3F3F5' }}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: '#718EBF',
              fontFamily: 'Inter',
              fontSize: fontSize,
              fontWeight: 400,
              textAnchor: 'end',
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: '12px',
              border: '1px solid #e6eff5'
            }}
          />
          <Bar
            dataKey="deposit"
            fill="#396AFF"
            radius={[10, 10, 10, 10]}
            barSize={barSize}
          />
          <Bar
            dataKey="withdraw"
            fill="#232323"
            radius={[10, 10, 10, 10]}
            barSize={barSize}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
