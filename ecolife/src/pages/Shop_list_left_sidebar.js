
import React, { Component } from "react";
import Header from "../components/Header";
import Breadcrumbarea from '../components/Breadcrumbarea';
import Shop_category from "../components/Shop_category";
import Footer from "../components/Footer.js";


const Shop_list_left_sidebar = props=>{

        return(
            <div>
            <Header />   
            <Breadcrumbarea page="Shop page" pagename="Shop List Left Sidebar"/>
            <Shop_category/>
            <Footer/>

            </div>
        );
    }



export default Shop_list_left_sidebar;