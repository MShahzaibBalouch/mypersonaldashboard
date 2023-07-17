import React from 'react';
import './MonthsCard.css';

const MonthsCard = ({data}) => {
  const {value, title} = data;
  return (
    <div className="card col-md-4 px-2 py-2">
    <p className="card-title">{title}</p>
    <div className="card-body align-item-center">
      <div className='d-flex justify-content-center w-100 h-100'>
        <h1 className='f-70'>{value}</h1>
      </div>
    </div>
  </div>
  )
}

export default MonthsCard;