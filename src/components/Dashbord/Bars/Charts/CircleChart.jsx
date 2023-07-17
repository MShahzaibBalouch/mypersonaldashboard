import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Charts.css';

const data = [
  { name: 'Category 1', value: 100 },
];

const COLORS = ['#fff'];

const CustomPieChart = () => {
  return (
    <div className="card">
      <div className="card-body">
      <p className="card-title">{`Pipeline Coverage this.month>`}</p>
        <div style={{ width: 300, height: 220 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                className='circle-chart-main'
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Pie
                data={[{ value: 100 }]} // Empty data for the stroke
                cx="50%"
                cy="50%"
                innerRadius={85}
                outerRadius={90}
                fill="#349daa"
                startAngle={0}
                endAngle={360}
                stroke="#349daa"
                strokeWidth={5}
              />
            </PieChart>
            
          </ResponsiveContainer>
                <h4 className='heading-circle'>100%</h4>
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;
