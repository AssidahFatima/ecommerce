import React from 'react';
import Sidebar from "../../../components/dashboard/sidebar/Sidebar"
import Navbar from "../../../components/dashboard/navbar/Navbar"
import AllCategories from "../../../components/dashboard/categories/AllCategories";
import { Link } from "react-router-dom";
import "./categories.scss";



const Categories = () => {
    return (
        <div>
            <div className="list">
             <Sidebar/>
          
         <div className="listContainer">
            <Navbar/>
       
          <div className="listTitle">All Categories
          <Link to="/dashboard/categories/new" className="link">
          Add New
          </Link>
          </div>
       
    
          <AllCategories />
         
            </div>
              </div>
        </div>
    );
};

export default Categories;