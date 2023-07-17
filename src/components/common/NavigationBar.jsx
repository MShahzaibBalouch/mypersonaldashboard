import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import {
  FaHome,
  FaGamepad,
  FaUser,
  FaDollarSign,
  FaEnvelope,
  FaCheck,
  FaComment,
  FaChartBar,
  FaCog,
  FaWhatsapp,
  FaCommentAlt,
} from 'react-icons/fa';
import { BsTelephone, BsBell, BsSearch } from 'react-icons/bs';
import { GrAppsRounded } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './Navigationbar.css';

import logo from '../../assets/images/logo1.png';
import profileImage from '../../assets/images/admin.png';

const NavigationBar = () => {
  return (
    <>
      <div className="topbar-container w-100">
        <div className="topbar py-3 container d-flex">
          <div className="topbar-section w-50 align-items-start">
            <Dropdown drop="left">
              <Dropdown.Toggle variant="white" id="dropdown-add">
                Add
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="topbar-section ml-auto d-flex align-items-center">
            <div className="message-whatsapp-wrapper custom-pointer mx-1 d-none d-md-block">
              <FaCommentAlt className="topbar-icon" />
            </div>
            <div className="message-whatsapp-wrapper custom-pointer mx-1 d-none d-md-block">
              <FaWhatsapp className="topbar-icon" />
            </div>
            <div className="search-area">
              <input type="search" placeholder="Search" className="br-2" />
              <BsSearch className="topbar-icon search-icon" />
            </div>
            <div className="border custom-pointer mx-1 rounded-1 border-1 border-dark border-2 d-md-block d-none">
              <BsTelephone className="topbar-icon" />
            </div>
            <div className="border custom-pointer mx-1 rounded-1 border-dark border-2 d-none d-md-block">
              <BsBell className="topbar-icon " />
            </div>
            <div className="custom-pointer mx-1 d-none d-md-block">
              <GrAppsRounded className="topbar-icon" />
            </div>
            <img src={profileImage} alt="profile" className="topbar-profile border border-dark border-2 mx-1 custom-pointer" />
          </div>
        </div>
      </div>
      <Nav className="sidebar d-none d-md-block flex-column">
        <NavLink to="/" activeClassName="active" className="nav-link justify-content-center">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <NavLink to="/home" activeClassName="active" className="nav-link">
          <FaHome className="sidebar-icon" />
        </NavLink>
        <NavLink to="/dashboard" activeClassName="active" className="nav-link">
          <FaGamepad className="sidebar-icon" />
        </NavLink>
        <NavLink to="/profile" activeClassName="active" className="nav-link">
          <FaUser className="sidebar-icon" />
        </NavLink>
        <NavLink to="/logout" activeClassName="active" className="nav-link">
          <FaDollarSign className="sidebar-icon" />
        </NavLink>
        <NavLink to="/messages" activeClassName="active" className="nav-link">
          <FaEnvelope className="sidebar-icon" />
        </NavLink>
        <NavLink to="/checked" activeClassName="active" className="nav-link">
          <FaCheck className="sidebar-icon" />
        </NavLink>
        <NavLink to="/messages" activeClassName="active" className="nav-link">
          <FaComment className="sidebar-icon" />
        </NavLink>
        <NavLink to="/graph" activeClassName="active" className="nav-link">
          <FaChartBar className="sidebar-icon" />
        </NavLink>
        <NavLink to="/settings" activeClassName="active" className="nav-link">
          <FaCog className="sidebar-icon" />
        </NavLink>
      </Nav>
    </>
  );
};

export default NavigationBar;
