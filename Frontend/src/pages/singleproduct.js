import React from 'react'
import { Link } from 'react-router-dom';
import http from "../http-common.js";
import ProductDataService from "../services/product.js";
import {useState, useEffect} from "react";
import product from '../services/product.js';
const Singleproduct = props =>{
    return(
        <div id="main">
{/*             <!-- Header Start -->
 */}            <header className="main-header">
{/*                 <!-- Header Top Start -->
 */}                <div className="header-top-nav">
                    <div className="container-fluid">
                        <div className="row">
{/*                             <!--Left Start-->
 */}                            <div className="col-lg-4 col-md-4">
                                <div className="left-text">
                                    <p>Welcome you to Ecolife store!</p>
                                </div>
                            </div>
                            {/* <!--Left End-->
                            <!--Right Start--> */}
                            <div className="col-lg-8 col-md-8 text-right">
                                <div className="header-right-nav">
                                    <ul className="res-xs-flex">
                                        <li className="after-n">
                                            <a href="compare.html"><i className="ion-ios-shuffle-strong"></i>Compare (0)</a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html"><i className="ion-android-favorite-outline"></i>Wishlist (0)</a>
                                        </li>
                                    </ul>
                                    <div className="dropdown-navs">
                                        <ul>
{/*                                             <!-- Settings Start -->
 */}                                            <li className="dropdown xs-after-n">
                                                <a className="angle-icon" href="#">Settings</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                </ul>
                                            </li>
                                            {/* <!-- Settings End -->
                                            <!-- Currency Start --> */}
                                            <li className="top-10px first-child">
                                                <select>
                                                    <option value="1">USD $</option>
                                                    <option value="2">EUR €</option>
                                                </select>
                                            </li>
                                            {/* <!-- Currency End -->
                                            <!-- Language Start --> */}
                                            <li className="top-10px mr-15px">
                                                <select>
                                                    <option value="1">English</option>
                                                    <option value="2">France</option>
                                                </select>
                                            </li>
{/*                                             <!-- Language End -->
 */}                                        </ul>
                                    </div>
                                </div>
                            </div>
{/*                             <!--Right End-->
 */}                        </div>
                    </div>
                </div>
                {/* <!-- Header Top End -->
                <!-- Header Buttom Start --> */}
                <div className="header-navigation sticky-nav">
                    <div className="container-fluid">
                        <div className="row">
{/*                             <!-- Logo Start -->
 */}                            <div className="col-md-2 col-sm-2">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo/logo.jpg" alt="" /></a>
                                </div>
                            </div>
                           {/*  <!-- Logo End -->
                            <!-- Navigation Start --> */}
                            <div className="col-md-10 col-sm-10">
{/*                                 <!--Main Navigation Start -->
 */}                                <div className="main-navigation d-none d-lg-block">
                                    <ul>
                                        <li className="menu-dropdown">
                                            <a href="#">Home <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="sub-menu">
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Home Organic <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="index.html">Organic 1</a></li>
                                                        <li><a href="index-2.html">Organic 2</a></li>
                                                        <li><a href="index-3.html">Organic 3</a></li>
                                                        <li><a href="index-4.html">Organic 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Home Cosmetic <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="index-5.html">Cosmetic 1</a></li>
                                                        <li><a href="index-6.html">Cosmetic 2</a></li>
                                                        <li><a href="index-7.html">Cosmetic 3</a></li>
                                                        <li><a href="index-8.html">Cosmetic 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Home Digital <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="index-9.html">Digital 1</a></li>
                                                        <li><a href="index-10.html">Digital 2</a></li>
                                                        <li><a href="index-11.html">Digital 3</a></li>
                                                        <li><a href="index-12.html">Digital 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Home Furniture <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="index-13.html">Furniture 1</a></li>
                                                        <li><a href="index-14.html">Furniture 2</a></li>
                                                        <li><a href="index-15.html">Furniture 3</a></li>
                                                        <li><a href="index-16.html">Furniture 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Home Medical <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="index-17.html">Medical 1</a></li>
                                                        <li><a href="index-18.html">Medical 2</a></li>
                                                        <li><a href="index-19.html">Medical 3</a></li>
                                                        <li><a href="index-20.html">Medical 4</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-dropdown">
                                            <a href="#">Shop <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="mega-menu-wrap">
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">Shop Grid</a></li>
                                                        <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                                                        <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                                                        <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">Shop List</a></li>
                                                        <li><a href="shop-list.html">Shop List</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                                                        <li><a href="single-product.html">Shop Single</a></li>
                                                        <li><a href="single-product-variable.html">Shop Variable</a></li>
                                                        <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                                        <li><a href="single-product-group.html">Shop Group</a></li>
                                                        <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                                                        <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                                                        <li><a href="single-product-slider.html">Shop Slider</a></li>
                                                        <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                                                        <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                                                        <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                                                        <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                                                    </ul>
                                                </li>
                                                <li className="banner-wrapper">
                                                    <a href="single-product.html"><img src="assets/images/banner-image/banner-menu.jpg" alt="" /></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-dropdown">
                                            <a href="#">Pages <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="about.html">About Page</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="compare.html">Compare Page</a></li>
                                                <li><a href="login.html">Login & Regiter Page</a></li>
                                                <li><a href="my-account.html">Account Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-dropdown">
                                            <a href="#">Blog <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="sub-menu">
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Blog Grid <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                                        <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Blog List <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                                        <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-static">
                                                    <a href="#">Blog Single <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                                        <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                                {/* <!--Main Navigation End -->
                                <!--Header Bottom Account Start --> */}
                                <div className="header_account_area">
{/*                                     <!--Seach Area Start -->
 */}                                    <div className="header_account_list search_list">
                                        <a href="javascript:void(0)"><i className="ion-ios-search-strong"></i></a>
                                        <div className="dropdown_search">
                                            <form action="#">
                                                <input placeholder="Search entire store here ..." type="text" />
                                                <div className="search-category">
                                                    <select className="bootstrap-select" name="poscats">
                                                        <option value="0">All categories</option>
                                                        <option value="104">
                                                            Fresh Food
                                                        </option>
                                                        <option value="183">
                                                            - - Fresh Fruit
                                                        </option>
                                                        <option value="187">
                                                            - - - - Bananas
                                                        </option>
                                                        <option value="188">
                                                            - - - - Apples &amp; Pears
                                                        </option>
                                                        <option value="189">
                                                            - - - - Berries &amp; Cherries
                                                        </option>
                                                        <option value="190">
                                                            - - - - Oranges &amp; Citrus Fruit
                                                        </option>
                                                        <option value="191">
                                                            - - - - Grapes
                                                        </option>
                                                        <option value="184">
                                                            - - Fresh Vegetables
                                                        </option>
                                                        <option value="192">
                                                            - - - - Potatoes &amp; Sweet Potatoes
                                                        </option>
                                                        <option value="193">
                                                            - - - - Onions &amp; Leeks
                                                        </option>
                                                        <option value="194">
                                                            - - - - Carrots &amp; Root Vegetables
                                                        </option>
                                                        <option value="195">
                                                            - - - - Broccoli &amp; Cauliflower
                                                        </option>
                                                        <option value="196">
                                                            - - - - Cabbages &amp; Greens
                                                        </option>
                                                        <option value="185">
                                                            - - Fresh Salad &amp; Dips
                                                        </option>
                                                        <option value="197">
                                                            - - - - Lettuce &amp; Salad bags
                                                        </option>
                                                        <option value="198">
                                                            - - - - Tomatoes
                                                        </option>
                                                        <option value="199">
                                                            - - - - Cucumber
                                                        </option>
                                                        <option value="200">
                                                            - - - - Celery
                                                        </option>
                                                        <option value="201">
                                                            - - - - Peppers
                                                        </option>
                                                        <option value="186">
                                                            - - Milk, Butter &amp; Eggs
                                                        </option>
                                                        <option value="202">
                                                            - - - - Milk
                                                        </option>
                                                        <option value="203">
                                                            - - - - Spreads &amp; Margarine
                                                        </option>
                                                        <option value="204">
                                                            - - - - Fresh Cream &amp; Custard
                                                        </option>
                                                        <option value="205">
                                                            - - - - Eggs
                                                        </option>
                                                        <option value="206">
                                                            - - - - Baking &amp; Cooking
                                                        </option>
                                                    </select>
                                                </div>
                                                <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                            </form>
                                        </div>
                                    </div>
{/*                                     <!--Seach Area End -->
 */}{/*                                     <!--Contact info Start -->
 */}                                    <div className="contact-link">
                                        <div className="phone">
                                            <p>Call us:</p>
                                            <a href="tel:(+800)345678">(+800)345678</a>
                                        </div>
                                    </div>
{/*                                     <!--Contact info End -->
 */}{/*                                     <!--Cart info Start -->
 */}                                    <div className="cart-info d-flex">
                                        <div className="mini-cart-warp">
                                            <a href="#" className="count-cart"><span>$20.00</span></a>
                                            <div className="mini-cart-content">
                                                <ul>
                                                    <li className="single-shopping-cart">
                                                        <div className="shopping-cart-img">
                                                            <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></a>
                                                            <span className="product-quantity">1x</span>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="single-product.html">Juicy Couture...</a></h4>
                                                            <span>$9.00</span>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion-android-cancel"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="single-shopping-cart">
                                                        <div className="shopping-cart-img">
                                                            <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></a>
                                                            <span className="product-quantity">1x</span>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="single-product.html">Water and Wind...</a></h4>
                                                            <span>$11.00</span>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion-android-cancel"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-total">
                                                    <h4>Subtotal : <span>$20.00</span></h4>
                                                    <h4>Shipping : <span>$7.00</span></h4>
                                                    <h4>Taxes : <span>$0.00</span></h4>
                                                    <h4 className="shop-total">Total : <span>$27.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-btn text-center">
                                                    <a className="default-btn" href="checkout.html">checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
{/*                                     <!--Cart info End -->
 */}                                </div>
                            </div>
                        </div>
{/*                         <!-- mobile menu -->
 */}                        <div className="mobile-menu-area">
                            <div className="mobile-menu">
                                <nav id="mobile-menu-active">
                                    <ul className="menu-overflow">
                                        <li>
                                            <a href="index.html">HOME</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Home Organic</a>
                                                    <ul>
                                                        <li><a href="index.html">Organic 1</a></li>
                                                        <li><a href="index-2.html">Organic 2</a></li>
                                                        <li><a href="index-3.html">Organic 3</a></li>
                                                        <li><a href="index-4.html">Organic 4</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Home Cosmetic</a>
                                                    <ul>
                                                        <li><a href="index-5.html">Cosmetic 1</a></li>
                                                        <li><a href="index-6.html">Cosmetic 2</a></li>
                                                        <li><a href="index-7.html">Cosmetic 3</a></li>
                                                        <li><a href="index-8.html">Cosmetic 4</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Home Digital</a>
                                                    <ul>
                                                        <li><a href="index-9.html">Digital 1</a></li>
                                                        <li><a href="index-10.html">Digital 2</a></li>
                                                        <li><a href="index-11.html">Digital 3</a></li>
                                                        <li><a href="index-12.html">Digital 4</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Home Furniture</a>
                                                    <ul>
                                                        <li><a href="index-13.html">Furniture 1</a></li>
                                                        <li><a href="index-14.html">Furniture 2</a></li>
                                                        <li><a href="index-15.html">Furniture 3</a></li>
                                                        <li><a href="index-16.html">Furniture 4</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Home Medical</a>
                                                    <ul>
                                                        <li><a href="index-17.html">Medical 1</a></li>
                                                        <li><a href="index-18.html">Medical 2</a></li>
                                                        <li><a href="index-19.html">Medical 3</a></li>
                                                        <li><a href="index-20.html">Medical 4</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Shop</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Shop Grid</a>
                                                    <ul>
                                                        <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                                                        <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                                                        <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Shop List</a>
                                                    <ul>
                                                        <li><a href="shop-list.html">Shop List</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Single Shop</a>
                                                    <ul>
                                                        <li><a href="single-product.html">Shop Single</a></li>
                                                        <li><a href="single-product-variable.html">Shop Variable</a></li>
                                                        <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                                        <li><a href="single-product-group.html">Shop Group</a></li>
                                                        <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                                                        <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Single Shop</a>
                                                    <ul>
                                                        <li><a href="single-product-slider.html">Shop Slider</a></li>
                                                        <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                                                        <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                                                        <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                                                        <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul>
                                                <li><a href="about.html">About Page</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="compare.html">Compare Page</a></li>
                                                <li><a href="login.html">Login & Regiter Page</a></li>
                                                <li><a href="my-account.html">Account Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                                <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                                <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                                <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                                <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                                <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
{/*                         <!-- mobile menu end-->
 */}                    </div>
                </div>
{/*                 <!--Header Bottom Account End -->
 */}            </header>
{/*             <!-- Header End -->
 */}{/*             <!-- Breadcrumb Area start -->
 */}            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-hrading">Single Product Page</h1>
                                <ul className="breadcrumb-links">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Single Product</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
{/*             <!-- Breadcrumb Area End -->
 */}{/*             <!-- Shop details Area start -->
 */}            <section className="product-details-area mtb-60px">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-img product-details-tab">
                                <div className="zoompro-wrap zoompro-2">
                                    <div className="zoompro-border zoompro-span">
                                        <img className="zoompro" src="assets/images/product-image/organic/product-11.jpg" data-zoom-image="assets/images/product-image/organic/zoom/1.jpg" alt="" />
                                    </div>
                                </div>
                                <div id="gallery" className="product-dec-slider-2">
                                    <a className="active" data-image="assets/images/product-image/organic/product-11.jpg" data-zoom-image="assets/images/product-image/organic/zoom/1.jpg">
                                        <img src="assets/images/product-image/organic/product-11.jpg" alt="" />
                                    </a>
                                    <a data-image="assets/images/product-image/organic/product-9.jpg" data-zoom-image="assets/images/product-image/organic/zoom/2.jpg">
                                        <img src="assets/images/product-image/organic/product-9.jpg" alt="" />
                                    </a>
                                    <a data-image="assets/images/product-image/organic/product-20.jpg" data-zoom-image="assets/images/product-image/organic/zoom/3.jpg">
                                        <img src="assets/images/product-image/organic/product-20.jpg" alt="" />
                                    </a>
                                    <a data-image="assets/images/product-image/organic/product-19.jpg" data-zoom-image="assets/images/product-image/organic/zoom/4.jpg">
                                        <img src="assets/images/product-image/organic/product-19.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-content">
                                <h2>Phalhari Chiwda</h2>
                                <p className="reference">Reference:<span> demo_17</span></p>
                                <div className="pro-details-rating-wrap">
                                    <div className="rating-product">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                    </div>
                                    <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€18.90</li>
                                    </ul>
                                </div>
                                <p>Chiwda which is also known as diet chiwda. It is spicy, really crispy, slightly tangy and very tasty. It is made with rice flakes, gram flour and flavourful spices. A perfect delightful snack that can be enjoyed with tea or as a evening snack. It is a great healthy snack option. Satisfy your taste buds with something crispy and traditional yet healthy. It is a zingy, light and perfect snack. It does not contain artificial colours or preservatives.</p>
                                {/* <!--<div className="pro-details-list">
                                    <ul>
                                        <li>- 0.5 mm Dail</li>
                                        <li>- Inspired vector icons</li>
                                        <li>- Very modern style</li>
                                    </ul>
                                </div>--> */}
                                <div className="pro-details-quality mt-0px">
                                    <div className="cart-plus-minus">
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                    </div>
                                    <div className="pro-details-cart btn-hover">
                                        <a href="#"> + Add To Cart</a>
                                    </div>
                                </div>
                                <div className="pro-details-wish-com">
                                    <div className="pro-details-wishlist">
                                        <a href="#"><i className="ion-android-favorite-outline"></i>Add to wishlist</a>
                                    </div>
                                    <div className="pro-details-compare">
                                        <a href="#"><i className="ion-ios-shuffle-strong"></i>Add to compare</a>
                                    </div>
                                </div>
                                <div className="pro-details-social-info">
                                    <span>Share</span>
                                    <div className="social-info">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/Technocolabs/"><i className="ion-social-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/Technocolabs1?s=09"><i className="ion-social-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.google.com/search?rlz=1C1SQJL_enIN900IN900&sxsrf=ALeKk004JPLKbf4cX_r5mbtOjCKZ8fS6kw:1623301902939&q=technocolabs&spell=1&sa=X&ved=2ahUKEwjypabqpozxAhWz4nMBHd1QDv0QBSgAegQIARAw&biw=1340&bih=612"><i className="ion-social-google"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/accounts/login/"><i className="ion-social-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pro-details-policy">
                                    <ul>
                                        <li><img src="assets/images/icons/policy.png" alt="" /><span>Security Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><img src="assets/images/icons/policy-2.png" alt="" /><span>Delivery Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><img src="assets/images/icons/policy-3.png" alt="" /><span>Return Policy (Edit With Customer Reassurance Module)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
{/*             <!-- Shop details Area End -->
 */}{/*             <!-- product details description area start -->
 */}            <div className="description-review-area mb-60px">
                <div className="container">
                    <div className="description-review-wrapper">
                        <div className="description-review-topbar nav">
                            <a data-toggle="tab" href="#des-details1">Description</a>
                            <a className="active" data-toggle="tab" href="#des-details2">Product Details</a>
                            <a data-toggle="tab" href="#des-details3">Reviews (2)</a>
                        </div>
                        <div className="tab-content description-review-bottom">
                            <div id="des-details2" className="tab-pane active">
                                <div className="product-anotherinfo-wrapper">
                                    <ul>
                                        <li><span>Weight</span> 400 g</li>
                                        <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                        <li><span>Materials</span> 60% Corn, 40% Other Ingredients</li>
                                        <li><span>Other Info</span> Produced in India</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="des-details1" className="tab-pane">
                                <div className="product-description-wrapper">
                                    <p>Chiwda which is also known as diet chiwda. It is spicy, really crispy, slightly tangy and very tasty. It is made with rice flakes, gram flour and flavourful spices. A perfect delightful snack that can be enjoyed with tea or as a evening snack. It is a great healthy snack option. Satisfy your taste buds with something crispy and traditional yet healthy. It is a zingy, light and perfect snack. It does not contain artificial colours or preservatives.</p>
                                </div>
                            </div>
                            <div id="des-details3" className="tab-pane">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="review-wrapper">
                                            <div className="single-review">
                                                <div className="review-img">
                                                    <img src="assets/images/testimonial-image/1.png" alt="" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>Bharath</h4>
                                                            </div>
                                                            <div className="rating-product">
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
{/*                                                                 <!--<i className="ion-android-star"></i>-->
 */}                                                            </div>
                                                        </div>
                                                        <div className="review-left">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>
                                                            Freshness locked in the packet when compare to 5 - 10 Rs. Pack..Tasty & good,I love this product..

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-review child-review">
                                                <div className="review-img">
                                                    <img src="assets/images/testimonial-image/2.png" alt="" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>phani</h4>
                                                            </div>
                                                            <div className="rating-product">
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-left">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>Awesome crunchiness. If your mom cooked any veggie you don't like then take some bhujia mix it in your sabzi and eat it. You will love your most hated sabzi ?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="ratting-form-wrapper pl-50">
                                            <h3>Add a Review</h3>
                                            <div className="ratting-form">
                                                <form action="#">
                                                    <div className="star-box">
                                                        <span>Your rating:</span>
                                                        <div className="rating-product">
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="rating-form-style mb-10">
                                                                <input placeholder="Name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="rating-form-style mb-10">
                                                                <input placeholder="Email" type="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="rating-form-style form-submit">
                                                                <textarea name="Your Review" placeholder="Message"></textarea>
                                                                <input type="submit" value="Submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/*             <!-- product details description area end -->
 */}            {/* <!-- Recent Add Product Area Start --> */}
            <section className="recent-add-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
{/*                             <!-- Section Title -->
 */}                            <div className="section-title">
                                <h2>You Might Also Like</h2>
                                <p>Add Related products to weekly line up</p>
                            </div>
{/*                             <!-- Section Title -->
 */}                        </div>
                    </div>
{/*                     <!-- Recent Product slider Start -->
 */}                    <div className="recent-product-slider owl-carousel owl-nav-style">
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-12.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-12.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Ringos</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price">€23.90</li>
                                        <li className="current-price">€21.51</li>
                                        <li className="discount-price">-10%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-1.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-1.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Alphonso mangos</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price">€35.90</li>
                                        <li className="current-price">€34.21</li>
                                        <li className="discount-price">-5%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-3.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-3.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">California Almonds</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-6.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-6.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Strawberry</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-22.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-22.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">pomegranate juice</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-14.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Chicken burger</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price">€12.90</li>
                                        <li className="current-price">€10.21</li>
                                        <li className="discount-price">-10%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
{/*                     <!-- Recent product slider end -->
 */}                </div>
            </section>
{/*             <!-- Recent product area end -->
 */}            {/* <!-- Recent Add Product Area Start --> */}
            <section className="recent-add-area mt-30 mb-30px">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
{/*                             <!-- Section Title -->
 */}                            <div className="section-title">
                                <h2>In The Same Category</h2>
                                <p>16 other products in the same category:</p>
                            </div>
{/*                             <!-- Section Title -->
 */}                        </div>
                    </div>
{/*                     <!-- Recent Product slider Start -->
 */}                    <div className="recent-product-slider owl-carousel owl-nav-style">
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-15.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-15.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">fruit juice</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price">€23.90</li>
                                        <li className="current-price">€21.51</li>
                                        <li className="discount-price">-10%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-14.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Burger</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price">€35.90</li>
                                        <li className="current-price">€34.21</li>
                                        <li className="discount-price">-5%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-22.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-22.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">pomegranate juice</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Salted Cashews</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-18.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-18.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Tomato</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-7.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-7.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Lemon</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price">€12.90</li>
                                        <li className="current-price">€10.21</li>
                                        <li className="discount-price">-10%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-17.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-16.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Trans-Weight Hooded...</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€11.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                        <article className="list-product">
                            <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GROCERY</span></a>
                                <h2><a href="single-product.html" className="product-link">Water and Wind Resist...</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                    <i className="ion-android-star"></i>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€11.90</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="add-to-link">
                                <ul>
                                    <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                    <li>
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                    </li>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </article>
{/*                         <!-- Single Item -->
 */}                    </div>
{/*                     <!-- Recent product slider end -->
 */}                </div>
            </section>
            {/* <!-- Recent product area end -->
            <!-- Footer Area start --> */}
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
{/*                             <!-- footer single wedget -->
 */}                            <div className="col-md-6 col-lg-4">
{/*                                 <!-- footer logo -->
 */}                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt="" /></a>
                                </div>
{/*                                 <!-- footer logo -->
 */}                                <div className="about-footer">
                                    <p className="text-info">We are a team of designers and developers that create high quality HTML template</p>
                                    <div className="need-help">
                                        <p className="phone-info">
                                            NEED HELP?
                                            <span>
                                                (+800) 345 678 <br />
                                                (+800) 123 456
                                            </span>
                                        </p>
                                    </div>
                                    <div className="social-info">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/Technocolabs/"><i className="ion-social-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/Technocolabs1?s=09"><i className="ion-social-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.linkedin.com/company/technocolabs/"><i className="ion-social-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.google.com/search?rlz=1C1SQJL_enIN900IN900&sxsrf=ALeKk004JPLKbf4cX_r5mbtOjCKZ8fS6kw:1623301902939&q=technocolabs&spell=1&sa=X&ved=2ahUKEwjypabqpozxAhWz4nMBHd1QDv0QBSgAegQIARAw&biw=1340&bih=612"><i className="ion-social-google"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/accounts/login/"><i className="ion-social-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
{/*                             <!-- footer single wedget -->
 */}                            <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Information</h4>
                                    <div className="footer-links">
                                        <ul>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Delivery</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Secure Payment</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Sitemap</a></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Stores</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
{/*                             <!-- footer single wedget -->
 */}                            <div className="col-md-6 col-lg-2 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Custom Links</h4>
                                    <div className="footer-links">
                                        <ul>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Legal Notice</a></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Prices Drop</a></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">New Products</a></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Best Sales</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
{/*                             <!-- footer single wedget -->
 */}                            <div className="col-md-6 col-lg-4 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Newsletter</h4>
                                    <div className="subscrib-text">
                                        <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                                    </div>

                                    <div id="mc_embed_signup" className="subscribe-form">
                                        <form
                                            id="mc-embedded-subscribe-form"
                                            className="validate"
                                            novalidate=""
                                            target="_blank"
                                            name="mc-embedded-subscribe-form"
                                            method="post"
                                            action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                                        >
                                            <div id="mc_embed_signup_scroll" className="mc-form">
                                                <input className="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL" value="" />
                                                <div className="mc-news" aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                                                    <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                </div>
                                                <div className="clear">
                                                    <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Sign Up" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="img_app">
                                        <a href="#"><img src="assets/images/icons/app_store.png" alt="" /></a>
                                        <a href="#"><img src="assets/images/icons/google_play.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
{/*                             <!-- footer single wedget -->
 */}                        </div>
                    </div>
                </div>
{/*                 <!--  Footer Bottom Area start -->
 */}                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <p className="copy-text">Copyright © <a href="https://hasthemes.com/"> HasThemes</a>. All Rights Reserved</p>
                            </div>
                            <div className="col-md-6 col-lg-8">
                                <img className="payment-img" src="assets/images/icons/payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
{/*                 <!--  Footer Bottom Area End-->
 */}            </footer>
{/*             <!--  Footer Area End -->
 */}        </div>
    )
}

export default Singleproduct;