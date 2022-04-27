import React from 'react';
import Sidebar from "../../../components/dashboard/sidebar/Sidebar"
import Navbar from "../../../components/dashboard/navbar/Navbar"
import AllProducts from "../../../components/dashboard/products/allProduct/AllProduct";
import { Link } from "react-router-dom";
import "./products.scss";



const Products = () => {
    return (
        <div>
            <div className="list">
             <Sidebar/>
          
         <div className="listContainer">
            <Navbar/>
       
          <div className="listTitle">All Products
          <Link to="/dashboard/products/new" className="link">
          Add New
          </Link>
          </div>
          
          <AllProducts />
         
            </div>
              </div>
        </div>
    );
};

export default Products;