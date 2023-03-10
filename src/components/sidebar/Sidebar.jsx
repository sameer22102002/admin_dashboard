import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

function Sidebar() {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style ={{textDecoration:"none"}}>
          <span className="logo">Sameer</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon"/><span>Dashboard</span> </li>
          <p className="title">LISTS</p>
          <Link to='/users' style ={{textDecoration:"none"}}>
            <li><PersonOutlineOutlinedIcon className="icon"/><span>Users</span> </li>
          </Link>
          <Link to='/products' style ={{textDecoration:"none"}}>
            <li><StoreIcon className="icon"/><span>Products</span> </li>
          </Link>
          <li><CreditCardOutlinedIcon className="icon"/><span>Orders</span> </li>
          <li><LocalShippingOutlinedIcon className="icon"/><span>Delivery</span> </li>
          <p className="title">USEFUL</p>
          <li><QueryStatsTwoToneIcon className="icon"/><span>Stats</span> </li>
          <li><NotificationsNoneIcon className="icon"/><span>Notifications</span> </li>
          <p className="title">SERVICE</p>
          <li><MonitorHeartIcon className="icon"/><span>System Health</span> </li>
          <li><PsychologyOutlinedIcon className="icon"/><span>Logs</span> </li>
          <li><SettingsOutlinedIcon className="icon"/><span>Settings</span> </li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icon"/><span>profile</span> </li>
          <li><LogoutOutlinedIcon className="icon"/><span>logout</span> </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
}

export default Sidebar;
