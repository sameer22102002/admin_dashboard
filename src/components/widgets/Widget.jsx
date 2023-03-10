import React from 'react'
import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {

  const amount = 100;
  const diff = 20; 
  let data;

  switch(type){
    case "user":
      data = {
        title : "USERS",
        isMoney : false,
        link : "See all users",
        icon : <PersonOutlineOutlinedIcon className='icon' style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)"}}/>
      };
      break;

    case "order":
      data = {
        title : "USERS",
        isMoney : false,
        link : "See all users",
        icon : <ShoppingCartOutlinedIcon className='icon' style={{color:"goldenrod", backgroundColor:"rgba(218,165,32,0.2)"}}/>
      };
      break;

    case "earning":
      data = {
        title : "EARNINGS",
        isMoney : true,
        link : "View net earnings",
        icon : <PaidOutlinedIcon className='icon' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>
      };
      break;

    case "balance":
      data = {
        title : "BALANCE",
        isMoney : true,
        link : "See details",
        icon : <AccountBalanceWalletOutlinedIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,120,0.2)"}}/>
      };
      break;

    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
         <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"><ArrowDropUpIcon/>{diff}%</div>
        {data.icon}

      </div>
    </div>
  )
}

export default Widget