import React from "react";

import "../assets/css/style.min.css";
import "../assets/css/responsive.min.css";
import "../assets/css/vendor/plugins.min.css";
import "D:/internship/B2b/ecolife/node_modules/font-awesome/css/font-awesome.min.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ringos from "../assets/images/myimgs/ringos.jpg"
import mango from "../assets/images/product-image/organic/product-1.jpg"
import almonds from "../assets/images/product-image/organic/product-3.jpg"
import strawberry from "../assets/images/product-image/organic/product-6.jpg"
import promogranate from "../assets/images/product-image/organic/product-22.jpg"
import burger from "../assets/images/product-image/organic/product-14.jpg"
import juice from "../assets/images/product-image/organic/product-15.jpg"
import cashews from "../assets/images/product-image/organic/product-9.jpg"
import tomato from "../assets/images/product-image/organic/product-18.jpg"
import lemon from "../assets/images/product-image/organic/product-7.jpg"
class Recomendation extends React.Component{
    render(){
        return(
            <div>
            <div className="recent-add-area">
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
 */}                    <div className="recent-product-slider owl-carousel owl-nav-style owl-loaded owl-drag">
                        {/* <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item --> */}
                        
                    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition:"all 0s ease 0s", width: "1440px"}}><div className="owl-item active" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={ringos} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-12.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Ringos</Link></h2>
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
                        </article></div><div className="owl-item active" style={{width: '210px', marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={mango} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-1.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Alphonso mangos</Link></h2>
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
                        </article></div><div className="owl-item active" style={{width: '210px', marginRight: '30px'}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={almonds} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-3.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">California Almonds</Link></h2>
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
                        </article></div><div className="owl-item active" style={{width: '210px', marginRight: '30px'}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={strawberry} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-6.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Strawberry</Link></h2>
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
                        </article></div><div className="owl-item active" style={{width: '210px', marginRight: '30px'}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={promogranate} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-22.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">pomegranate juice</Link></h2>
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
                        </article></div><div className="owl-item active" style={{width: '210px', marginRight: '30px'}}>
                        <article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={burger} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Chicken burger</Link></h2>
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
                        </article></div></div></div><div className="owl-nav disabled"><div className="owl-prev disabled">prev</div><div className="owl-next disabled">next</div></div><div className="owl-dots disabled"></div></div>
{/*                     <!-- Recent product slider end -->
 */}                </div>
            </div>
            <div className="recent-add-area mt-30 mb-30px">
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
 */}                    <div className="recent-product-slider owl-carousel owl-nav-style owl-loaded owl-drag">
                        {/* <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item -->
                        
                        <!-- Single Item --> */}
                    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width:" 1920px"}}><div className="owl-item active" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={juice} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-15.jpg" alt=""/>
                                </Link>
                                <div className="quick-view">
                                    <a className="quick_view" to="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                        <i className="ion-ios-search-strong"></i>
                                    </a>
                                </div>
                            </div>
                            <ul className="product-flag">
                                <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                                <Link className="inner-link" href="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">fruit juice</Link></h2>
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
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item active" style={{width: "210px", marginRight:" 30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={burger} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Burger</Link></h2>
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
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item active" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={promogranate} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-22.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">pomegranate juice</Link></h2>
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
                                    <li className="cart"><Link className="cart-btn" href="#">ADD TO CART </Link></li>
                                    <li>
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item active" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={cashews} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Salted Cashews</Link></h2>
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
                                    <li className="cart"><Link className="cart-btn" to="#">ADD TO CART </Link></li>
                                    <li>
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item active" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={tomato} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-18.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Tomato</Link></h2>
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
                                    <li className="cart"><Link className="cart-btn" to="#">ADD TO CART </Link></li>
                                    <li>
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item active" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src={lemon} alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-7.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Lemon</Link></h2>
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
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-17.jpg" alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-16.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Trans-Weight Hooded...</Link></h2>
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
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div><div className="owl-item" style={{width: "210px", marginRight: "30px"}}><article className="list-product">
                            <div className="img-block">
                                <Link to="/Single_product" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt=""/>
                                    <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt=""/>
                                </Link>
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
                                <Link className="inner-link" to="shop-4-column.html"><span>GROCERY</span></Link>
                                <h2><Link to="/Single_product" className="product-link">Water and Wind Resist...</Link></h2>
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
                                        <Link to="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </article></div></div></div><div className="owl-nav"><div className="owl-prev disabled">prev</div><div className="owl-next">next</div></div><div className="owl-dots disabled"></div></div>
{/*                     <!-- Recent product slider end -->
 */}                </div>
            </div>
            </div>
        );
    }
}

export default Recomendation;