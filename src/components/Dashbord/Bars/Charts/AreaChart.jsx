import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#349daa" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const AreaChartComponent = () => {
  const data = [
    { name: 'Jan', uv: 600, pv: 450 },
    { name: 'Feb', uv: 600, pv: 450 },
    { name: 'Mar', uv: 600, pv: 450 },
    { name: 'Apr', uv: 600, pv: 450 },
    { name: 'May', uv: 600, pv: 450 },
    { name: 'Jun', uv: 600, pv: 450 },
    { name: 'Jul', uv: 600, pv: 450 },
  ];

  return (
    <div className='card col-12 px-2 py-2'>
      <p className="card-title">{`Forecast this.month>`}</p>
      <div className='card-body chart-area'>
        <AreaChart className='m-r-5' height={240} width={330} data={data}>
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis hide={false} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="none" fill='#349daa'/>
          <Area type="monotone" dataKey="uv" stroke="none" fill='#349daa' />
        </AreaChart>
      </div>
    </div>
  );
};

export default AreaChartComponent;
