import React from 'react';
import './Deals.css';
import { TfiPencilAlt } from 'react-icons/tfi';
import { PiTextAlignLeftFill } from 'react-icons/pi';
import { BiShow } from 'react-icons/bi';

const Deals = () => {
    return (
        <div className="card col-md-4 px-2 py-2">
            <p className="card-title">{`Top Deals>`}</p>
            <div className="section d-flex">
                <div className="profile-deals">
                    <b>$</b>
                </div>
                <div className="w-75 text-left">
                    <p className='deals-card-title'>Lorem ipsum</p>
                    <p className='deals-card-body'>Description</p>
                </div>
            </div>
            <div className="section d-flex">
                <div className="column">
                    <TfiPencilAlt className="topbar-icon" />
                </div>
                <div className="w-75">
                    <p className='deals-card-title'>Lorem ipsum</p>
                    <p className='deals-card-body'>Description</p>
                </div>
            </div>
            <hr />
            <div className="section d-flex">
                <div className="column profile-deals">
                    <b>$</b>
                </div>
                <div className="w-75">
                    <p className='deals-card-title'>Lorem ipsum</p>
                    <p className='deals-card-body'>Description</p>
                </div>
            </div>
            <div className="section d-flex">
                <div className="column">
                    <PiTextAlignLeftFill className="topbar-icon" />
                </div>
                <div className="w-75">
                    <p className='deals-card-title'>Lorem ipsum</p>
                    <p className='deals-card-body'>Description</p>
                </div>
            </div>
            <hr />
            <div className="section d-flex">
                <div className="column profile-deals">
                    <b>$</b>
                </div>
                <div className="w-75">
                    <p className='deals-card-title'>Lorem ipsum</p>
                    <p className='deals-card-body'>Description</p>
                </div>
            </div>
            <div className="section d-flex">
                <div className="column">
                    <BiShow className="topbar-icon" />
                </div>
                <div className="w-75">
                    <p className='deals-card-title'>Lorem ipsum</p>
                    <p className='deals-card-body'>Description</p>
                </div>
            </div>
        </div>
    )
}

export default Deals;