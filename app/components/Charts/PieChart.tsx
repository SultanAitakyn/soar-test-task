'use client';
import styles from "@/app/components/Charts/Chart.module.scss";
import {
    PieChart as RechartsPieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
    Sector
} from 'recharts';
const pieData = [
    { name: 'Bill Expense', value: 15, color: '#FC7900', level: 6 },
    { name: 'Entertainment', value: 25, color: '#343C6A', level: 3 },
    { name: 'Investment', value: 35, color: '#396AFF', level: 1 },
    { name: 'Others', value: 25, color: '#232323', level: 3 },
];

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
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    );
}

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

export default PieChart;