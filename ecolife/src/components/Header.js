import React from "react";

import "../assets/css/style.min.css";
import "../assets/css/responsive.min.css";
import "../assets/css/vendor/plugins.min.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.jpg"

class Header extends React.Component{
    state={
        searchop : true,
        currencydis : false,
        currentcurrency : "EUR €",
        currentlang : "English",
        languagedis:false,
        catagoriesopen: false,
    }
    searchtog=()=>{
        this.setState({searchop: !this.state.searchop});
    }
    currencyselop=()=>{
        this.setState({currencydis: !this.state.currencydis});

    }
    selcurtypeus=()=>{
        if (this.state.currentcurrency === "USD $") {
            this.setState({currentcurrency: "USD $"});
        } else {
            this.setState({currentcurrency: "USD $"});
        }
    }
    selcurtypeeur=()=>{
        if (this.state.currentcurrency === "EUR €") {
            this.setState({currentcurrency: "EUR €"});
        } else {
            this.setState({currentcurrency: "EUR €"});
        }
    }
    langselop=()=>{
        this.setState({languagedis: !this.state.languagedis});
    }
    selclangeng=()=>{
        if (this.state.currentlang === "English") {
            this.setState({currentlang: "English"});
        } else {
            this.setState({currentlang: "English"});
        }
    }
    selclangfrance=()=>{
        if (this.state.currentlang === "France") {
            this.setState({currentlang: "France"});
        } else {
            this.setState({currentlang: "France"});
        }
    }
    opencat=()=>{
        this.setState({catagoriesopen: !this.state.catagoriesopen});
    }
    render(){
        return(
            
            <header className="main-header">
{/*             <!-- Header Top Start -->
 */}            <div className="header-top-nav" style={{height:"50px"}}>
                <div className="container-fluid">
                    <div className="row">
{/*                         <!--Left Start-->
 */}                        <div className="col-lg-4 col-md-4" style={{height:"30px"}}>
                            <div className="left-text" style={{marginBottom:"0px"}}>
                                <p style={{marginBottom:"0px", fontSize:'14px'}}>Welcome you to Ecolife store!</p>
                            </div>
                        </div>
                        {/* <!--Left End-->
                        <!--Right Start--> */}
                        <div className="col-lg-8 col-md-8 text-right">
                            <div className="header-right-nav">
                                <ul className="res-xs-flex">
                                    <li className="after-n">
                                        <Link href="compare.html"><i className="ion-ios-shuffle-strong"></i>Compare (0)</Link>
                                    </li>
                                    <li>
                                        <Link href="wishlist.html"><i className="ion-android-favorite-outline"></i>Wishlist (0)</Link>
                                    </li>
                                </ul>
                                <div className="dropdown-navs">
                                    <ul>
{/*                                         <!-- Settings Start -->
 */}                                        <li className="dropdown xs-after-n" style={{margintTop:'7px'}}>
                                            <Link className="angle-icon"   href="#">Settings</Link>
                                            <ul className="dropdown-nav">
                                                <li><Link href="my-account.html">My Account</Link></li>
                                                <li><Link href="checkout.html">Checkout</Link></li>
                                                <li><Link href="login.html">Login</Link></li>
                                            </ul>
                                        </li>
                                        {/* <!-- Settings End -->
                                        <!-- Currency Start --> */}
                                        <li className="top-10px first-child">
                                                <select style={{display: "none"}}>
                                                    <option value="1">USD $</option>
                                                    <option value="2">EUR €</option>
                                                </select>
                                                <div className={this.state.currencydis?"nice-select open" :"nice-select"} tabindex="0" onClick={this.currencyselop}>
                                                    <span className="current">{this.state.currentcurrency}</span>
                                                    <ul className="list">
                                                        <li data-value="1" className={this.state.currentcurrency === "USD $"?"option selected focus":"option"} onClick={this.selcurtypeus}>USD $</li>
                                                        <li data-value="2" className={(this.state.currentcurrency === "EUR €")?"option selected focus":"option"} onClick={this.selcurtypeeur}>EUR €</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        {/* <!-- Currency End -->
                                        <!-- Language Start --> */}
                                        <li className="top-10px mr-15px">
                                                <select style={{display: "none"}}>
                                                    <option value="1">English</option>
                                                    <option value="2">France</option>
                                                </select><div className={this.state.languagedis ?"nice-select open" :"nice-select"} tabindex="0" onClick={this.langselop}><span className="current">{this.state.currentlang}</span>
                                                <ul className="list">
                                                    <li data-value="1" className={this.state.currentlang === "English"?"option selected focus":"option"} onClick={this.selclangeng}>English</li>
                                                    <li data-value="2" className={this.state.currentlang === "France"?"option selected focus":"option"} onClick={this.selclangfrance}>France</li>
                                                    </ul>
                                                    </div>
                                            </li>
{/*                                         <!-- Language End -->
 */}                                    </ul>
                                </div>
                            </div>
                        </div>
{/*                         <!--Right End-->
 */}                    </div>
                </div>
            </div>
            {/* <!-- Header Top End -->
            <!-- Header Buttom Start --> */}
            <div className="header-navigation sticky-nav">
                <div className="container-fluid">
                    <div className="row">
{/*                         <!-- Logo Start -->
 */}                        <div className="col-md-2 col-sm-2">
                            <div className="logo">
                                <Link href="index.html"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        {/* <!-- Logo End -->
                        <!-- Navigation Start --> */}
                        <div className="col-md-10 col-sm-10">
{/*                             <!--Main Navigation Start -->
 */}                            <div className="main-navigation d-none d-lg-block">
                                <ul>
                                    <li className="menu-dropdown">
                                        <Link href="#">Home <i className="ion-ios-arrow-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Home Organic <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="index.html">Organic 1</Link></li>
                                                    <li><Link href="index-2.html">Organic 2</Link></li>
                                                    <li><Link href="index-3.html">Organic 3</Link></li>
                                                    <li><Link href="index-4.html">Organic 4</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Home Cosmetic <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="index-5.html">Cosmetic 1</Link></li>
                                                    <li><Link href="index-6.html">Cosmetic 2</Link></li>
                                                    <li><Link href="index-7.html">Cosmetic 3</Link></li>
                                                    <li><Link href="index-8.html">Cosmetic 4</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Home Digital <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="index-9.html">Digital 1</Link></li>
                                                    <li><Link href="index-10.html">Digital 2</Link></li>
                                                    <li><Link href="index-11.html">Digital 3</Link></li>
                                                    <li><Link href="index-12.html">Digital 4</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Home Furniture <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="index-13.html">Furniture 1</Link></li>
                                                    <li><Link href="index-14.html">Furniture 2</Link></li>
                                                    <li><Link href="index-15.html">Furniture 3</Link></li>
                                                    <li><Link href="index-16.html">Furniture 4</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Home Medical <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="index-17.html">Medical 1</Link></li>
                                                    <li><Link href="index-18.html">Medical 2</Link></li>
                                                    <li><Link href="index-19.html">Medical 3</Link></li>
                                                    <li><Link href="index-20.html">Medical 4</Link></li>
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
                                                    <li><Link href="shop-3-column.html">Shop Grid 3 Column</Link></li>
                                                    <li><Link href="shop-4-column.html">Shop Grid 4 Column</Link></li>
                                                    <li><Link href="shop-left-sidebar.html">Shop Grid Left Sidebar</Link></li>
                                                    <li><Link href="shop-right-sidebar.html">Shop Grid Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">Shop List</a></li>
                                                    <li><Link href="shop-list.html">Shop List</Link></li>
                                                    <li><Link to="/Shop_list_left_sidebar">Shop List Left Sidebar</Link></li>
                                                    <li><Link href="shop-list-right-sidebar.html">Shop List Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                                                    <li><Link to="/Single_product">Shop Single</Link></li>
                                                    <li><Link href="single-product-variable.html">Shop Variable</Link></li>
                                                    <li><Link href="single-product-affiliate.html">Shop Affiliate</Link></li>
                                                    <li><Link to="/Single_product">Shop Group</Link></li>
                                                    <li><Link href="single-product-tabstyle-2.html">Shop Tab 2</Link></li>
                                                    <li><Link href="single-product-tabstyle-3.html">Shop Tab 3</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                                                    <li><Link href="single-product-slider.html">Shop Slider</Link></li>
                                                    <li><Link href="single-product-gallery-left.html">Shop Gallery Left</Link></li>
                                                    <li><Link href="single-product-gallery-right.html">Shop Gallery Right</Link></li>
                                                    <li><Link href="single-product-sticky-left.html">Shop Sticky Left</Link></li>
                                                    <li><Link href="single-product-sticky-right.html">Shop Sticky Right</Link></li>
                                                </ul>
                                            </li>
                                            <li className="banner-wrapper">
                                                <Link to="/Single_product"><img src="assets/images/banner-image/banner-menu.jpg" alt="" /></Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-dropdown">
                                        <a href="#">Pages <i className="ion-ios-arrow-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><Link href="about.html">About Page</Link></li>
                                            <li><Link href="cart.html">Cart Page</Link></li>
                                            <li><Link href="checkout.html">Checkout Page</Link></li>
                                            <li><Link href="compare.html">Compare Page</Link></li>
                                            <li><Link href="login.html">Login & Regiter Page</Link></li>
                                            <li><Link href="my-account.html">Account Page</Link></li>
                                            <li><Link href="wishlist.html">Wishlist Page</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-dropdown">
                                        <a href="#">Blog <i className="ion-ios-arrow-down"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Blog Grid <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</Link></li>
                                                    <li><Link href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Blog List <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="blog-list-left-sidebar.html">Blog List Left Sidebar</Link></li>
                                                    <li><Link href="blog-list-right-sidebar.html">Blog List Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="#">Blog Single <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><Link href="blog-single-left-sidebar.html">Blog Single Left Sidebar</Link></li>
                                                    <li><Link href="blog-single-right-sidebar.html">Blog Single Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link href="contact.html">Contact Us</Link></li>
                                </ul>
                            </div>
                            {/* <!--Main Navigation End -->
                            <!--Header Bottom Account Start --> */}
                            <div className="header_account_area">
{/*                                 <!--Seach Area Start -->
 */}                                <div className="header_account_list search_list">
                                    
                                    <div className="dropdown_search">
                                        <form action="#">
                                            <input placeholder="Search entire store here ..." type="text" />
                                            <div className="search-category">
                                                <select className="bootstrap-select" name="poscats" style={{display:"none"}}>
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
                                                <div className={ this.state.catagoriesopen ? "nice-select bootstrap-select open":"nice-select bootstrap-select "} onClick={this.opencat} tabindex="0"><span className="current">All categories</span><ul className="list"><li data-value="0" className="option selected">All categories</li><li data-value="104" className="option">
                                                            Fresh Food
                                                        </li><li data-value="183" className="option">
                                                            - - Fresh Fruit
                                                        </li><li data-value="187" className="option">
                                                            - - - - Bananas
                                                        </li><li data-value="188" className="option">
                                                            - - - - Apples &amp; Pears
                                                        </li><li data-value="189" className="option">
                                                            - - - - Berries &amp; Cherries
                                                        </li><li data-value="190" className="option">
                                                            - - - - Oranges &amp; Citrus Fruit
                                                        </li><li data-value="191" className="option">
                                                            - - - - Grapes
                                                        </li><li data-value="184" className="option">
                                                            - - Fresh Vegetables
                                                        </li><li data-value="192" className="option">
                                                            - - - - Potatoes &amp; Sweet Potatoes
                                                        </li><li data-value="193" className="option">
                                                            - - - - Onions &amp; Leeks
                                                        </li><li data-value="194" className="option">
                                                            - - - - Carrots &amp; Root Vegetables
                                                        </li><li data-value="195" className="option">
                                                            - - - - Broccoli &amp; Cauliflower
                                                        </li><li data-value="196" className="option">
                                                            - - - - Cabbages &amp; Greens
                                                        </li><li data-value="185" className="option">
                                                            - - Fresh Salad &amp; Dips
                                                        </li><li data-value="197" className="option">
                                                            - - - - Lettuce &amp; Salad bags
                                                        </li><li data-value="198" className="option">
                                                            - - - - Tomatoes
                                                        </li><li data-value="199" className="option">
                                                            - - - - Cucumber
                                                        </li><li data-value="200" className="option">
                                                            - - - - Celery
                                                        </li><li data-value="201" className="option">
                                                            - - - - Peppers
                                                        </li><li data-value="186" className="option">
                                                            - - Milk, Butter &amp; Eggs
                                                        </li><li data-value="202" className="option">
                                                            - - - - Milk
                                                        </li><li data-value="203" className="option">
                                                            - - - - Spreads &amp; Margarine
                                                        </li><li data-value="204" className="option">
                                                            - - - - Fresh Cream &amp; Custard
                                                        </li><li data-value="205" className="option">
                                                            - - - - Eggs
                                                        </li><li data-value="206" className="option">
                                                            - - - - Baking &amp; Cooking
                                                        </li></ul></div>
                                            </div>

                                            <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                        </form>
                                    </div>
                                </div>
                                {/* <!--Seach Area End -->
                                <!--Contact info Start --> */}
                                <div className="contact-link">
                                    <div className="phone">
                                        <p>Call us:</p>
                                        <a href="tel:(+800)345678">(+800)345678</a>
                                    </div>
                                </div>
                                {/* <!--Contact info End -->
                                <!--Cart info Start --> */}
                                <div className="cart-info d-flex">
                                    <div className="mini-cart-warp">
                                        <a href="#" className="count-cart"><span>$20.00</span></a>
                                        <div className="mini-cart-content">
                                            <ul>
                                                <li className="single-shopping-cart">
                                                    <div className="shopping-cart-img">
                                                        <Link to="/Single_product"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></Link>
                                                        <span className="product-quantity">1x</span>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/Single_product">Juicy Couture...</Link></h4>
                                                        <span>$9.00</span>
                                                        <div className="shopping-cart-delete">
                                                            <Link href="#"><i className="ion-android-cancel"></i></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-shopping-cart">
                                                    <div className="shopping-cart-img">
                                                        <Link to="/Single_product"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></Link>
                                                        <span className="product-quantity">1x</span>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/Single_product">Water and Wind...</Link></h4>
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
                                                <Link className="default-btn" href="checkout.html">checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
{/*                                 <!--Cart info End -->
 */}                            </div>
                        </div>
                    </div>
{/*                     <!-- mobile menu -->
 */}                    {/* <div className="mobile-menu-area">
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
                                                    <li><Link to="/Shop_list_left_sidebar">Shop List Left Sidebar</Link></li>
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
                    </div> */}
{/*                     <!-- mobile menu end-->
 */}                </div>
            </div>
{/*             <!--Header Bottom Account End -->

 */}
      
         </header>
                    );
        }
}

export default Header;