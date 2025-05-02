import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface ProgressChartProps {
    data: {
        date: string;
        completed: number;
    }[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
    return (
        <div className="w-full h-64 mt-4 p-4 rounded-lg shadow-lg bg-white">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" className="text-sm" />
                    <YAxis className="text-sm" />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'white',
                            borderRadius: '0.375rem',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }}
                    />
                    <Bar dataKey="completed" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProgressChart;