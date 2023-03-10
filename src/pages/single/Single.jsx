import React from 'react'
import "./single.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Ava Black</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :</span>
                  <span className="itemValue">samdam@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemValue">+91 687 238 5763</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemValue">186, Hostel-11, Bit Mesra, Ranchi</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"><Chart aspect = { 3 / 1 } title="User Spendings ( Last 6 Months )"/></div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single