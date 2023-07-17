import React from 'react';
import BarChart from '../Charts/BarChart';
import './Admin.css';
import { Container } from 'react-bootstrap';
import MonthsCard from '../../Cards/MonthsCard';
import AreaChartComponent from '../Charts/AreaChart';
import CircleChart from '../Charts/CircleChart';
import Deals from '../../Cards/Deals';

const Admin = () => {
  const Data_21 = {
    value:21,
    title:`New Deals by: this.month>`,
  };
  const Data2 = {
    value:'$625.86K',
    title:`Revenue this.month>`,
  }

  return (
    <div className='mt-2 bg-admin z-5'>
      <Container className='py-4'>
        <div className='row'>
        <div className='col-md-6 col-lg-4 col-sm-10 mb-2 ml-5'>
          <BarChart />
        </div>
        <div className='col-md-6 col-lg-4 col-sm-10 mb-2 mr-5'>
          <MonthsCard data={Data_21} />
        </div>
        <div className='col-md-6 col-lg-4 col-sm-10 mb-2 ml-5'>
          <AreaChartComponent />
        </div>
        <div className='col-md-6 col-lg-4 col-sm-10 mb-2 mr-5'>
          <Deals />
        </div>
        <div className='col-md-6 col-lg-4 col-sm-10 mb-2 ml-5'>
          <MonthsCard data={Data2} />
        </div>
        <div className='col-md-6 col-lg-4 col-sm-10 mb-2 ml-5'>
          <CircleChart />
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Admin;