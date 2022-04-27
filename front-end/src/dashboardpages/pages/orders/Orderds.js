import React from 'react';
import Sidebar from "../../../components/dashboard/sidebar/Sidebar"
import Navbar from "../../../components/dashboard/navbar/Navbar"
import AllOrders from "../../../components/dashboard/orders/Orders";
import "./orders.scss";



const Order = () => {
    return (
        <div>
            <div className="list">
             <Sidebar/>
          
         <div className="listContainer">
            <Navbar/>
       
          <div className="listTitle">All Orders</div>
         
          
       
    
          <AllOrders />
         
            </div>
              </div>
        </div>
    );
};

export default Order;