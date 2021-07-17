import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/images/logo/footer-logo.png";
import appstore from "../assets/images/icons/app_store.png";
import palyStore from "../assets/images/icons/google_play.png";
import payment from "../assets/images/icons/payment.png";


class Footer extends React.Component{
    render(){
        return(
            <div>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
{/*                             <!-- footer single wedget -->
 */}                            <div className="col-md-6 col-lg-4">
{/*                                 <!-- footer logo -->
 */}                                <div className="footer-logo">
                                    <Link href="index.html"><img src={footerlogo} alt="" /></Link>
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
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><a href="#" onclick="alert('Page under devolopment')">Secure Payment</a></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
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
                                            <li><Link href="login.html">Login</Link></li>
                                            <li><Link href="my-account.html">My Account</Link></li>
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
                                                <div className="mc-news" aria-hidden="true" style={{position: 'absolute', left: -'5000px'}}>
                                                    <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                </div>
                                                <div className="clear">
                                                    <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Sign Up" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="img_app">
                                        <a href="#"><img src={appstore} alt="" /></a>
                                        <a href="#"><img src={palyStore} alt="" /></a>
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
                                <img className="payment-img" src={payment} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
{/*                 <!--  Footer Bottom Area End-->
 */}            </footer>
{/*             <!--  Footer Area End -->
 */}            </div>
        )
    }
}

export default Footer;