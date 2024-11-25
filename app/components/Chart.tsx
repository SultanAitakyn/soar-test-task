'use client'
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer, Sector, AreaChart, Area
} from 'recharts';
import styles from './Chart.module.scss';

const barData = [
    { day: 'Mon', deposit: 100, withdraw: 150 },
    { day: 'Tue', deposit: 200, withdraw: 100 },
    { day: 'Wed', deposit: 150, withdraw: 200 },
    { day: 'Thu', deposit: 300, withdraw: 250 },
    { day: 'Fri', deposit: 250, withdraw: 300 },
    { day: 'Sat', deposit: 400, withdraw: 200 },
    { day: 'Sun', deposit: 350, withdraw: 400 },
];

const pieData = [
    { name: 'Bill Expense', value: 15, color: '#FC7900', level: 6 },
    { name: 'Entertainment', value: 25, color: '#343C6A', level: 3 },
    { name: 'Investment', value: 35, color: '#396AFF', level: 1 },
    { name: 'Others', value: 25, color: '#232323', level: 3 },
];

const data = [
    { month: 'Jul', value: 100 },
    { month: 'Aug', value: 300 },
    { month: 'Sep', value: 500 },
    { month: 'Oct', value: 800 },
    { month: 'Nov', value: 400 },
    { month: 'Dec', value: 600 },
    { month: 'Jan', value: 700 },
];

const Chart = ({ type }: { type: 'bar' | 'pie' | 'line' }) => {
    if (type === 'bar') {
        return (
            <div className={styles.chartContainer}>
                <div className={styles.legendContainer}>
                    <div className={styles.legendItem}>
                        <div className={styles.depositCircle}></div>
                        Diposit
                    </div>
                    <div className={styles.legendItem}>
                        <div className={styles.withdrawCircle}></div>
                        Withdraw
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData} barGap={12}>
                        <CartesianGrid stroke="#F3F3F5" horizontal={true} vertical={false} />
                        <XAxis dataKey="day" tick={{
                            fill: '#718EBF',
                            fontFamily: 'Inter',
                            fontSize: 13,
                            fontWeight: 400,
                            textAnchor: 'middle'
                        }} axisLine={{ stroke: '#F3F3F5' }} tickLine={false}/>
                        <YAxis tick={{
                            fill: '#718EBF',
                            fontFamily: 'Inter',
                            fontSize: 13,
                            fontWeight: 400,
                            textAnchor: 'end'
                        }} axisLine={false} tickLine={false}/>
                        <Tooltip/>
                        <Bar dataKey="deposit" fill="#396AFF" radius={[10, 10, 10, 10]} barSize={15} />
                        <Bar dataKey="withdraw" fill="#232323" radius={[10, 10, 10, 10]} barSize={15} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }

    if (type === 'pie') {
        return (
            <div className={styles.pieChartContainer}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
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
                            activeIndex={activeIndices}       // Specify active slices
                            activeShape={renderActiveShape}   // Use custom active shape
                            stroke="#FFFFFF"    // Set stroke to the background color
                            strokeWidth={5}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }

    if (type === 'line') {
        return (
            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={300}>
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
                                <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2D60FF" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#DFE5EE"/>
                        <XAxis dataKey="month" tick={{ fill: '#718EBF', fontSize: 14 }} axisLine={{ stroke: '#DFE5EE', strokeDasharray: '3 3' }} />
                        <YAxis tick={{ fill: '#718EBF', fontSize: 14 }} axisLine={{ stroke: '#DFE5EE', strokeDasharray: '3 3' }} />
                        <Tooltip/>
                        <Area type="monotone" dataKey="value" stroke="#1814F3" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)"/>
                        <Line type="monotone" dataKey="value" stroke="#1814F3" strokeWidth={3} dot={false}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }

    return null;
};

const activeIndices = pieData
    .map((entry, index) => (entry.level > 1 ? index : null))
    .filter(index => index !== null);

const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, value, name,
                               }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

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
            <tspan x={x} dy="1.2em">{name}</tspan>
        </text>
    );
};

const renderActiveShape = (props) => {
    const {
        cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload
    } = props;

    const adjustedOuterRadius = outerRadius + (5 * payload.payload.level);

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

export default Chart;
