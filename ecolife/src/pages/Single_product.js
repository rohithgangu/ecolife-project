import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
//import SingleProduct from "../components/SingleProduct";
import Recomendation from "../components/Recomendation";
import Breadcrumbarea from "../components/Breadcrumbarea";
import Singleproductgroup from "../components/Singleproductgroup";
import SingleProduct from "../components/SingleProduct"
import { Router, Switch,Route } from "react-router-dom";

const Single_product =props=> {
        return(
            <div>
                <Header/>
                <Breadcrumbarea page="Single Product Page" pagename="single product"/>  
                
                <Singleproductgroup {...props}/>
                   
            
                 <Recomendation/>
                <Footer/>
            </div>
        );
}


export default Single_product;