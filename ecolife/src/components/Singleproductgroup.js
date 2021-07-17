import React from "react";

import "../assets/css/style.min.css";
import "../assets/css/responsive.min.css";
import "../assets/css/vendor/plugins.min.css";
import "D:/internship/B2b/ecolife/node_modules/font-awesome/css/font-awesome.min.css";
import ProductDataService from "../services/products.js"
import { useEffect,useState } from "react";
import lemon from "../assets/images/product-image/organic/product-7.jpg"
import fruitjuice from "../assets/images/product-image/organic/product-15.jpg"
import apricot from "../assets/images/product-image/organic/product-19.jpg"
import oranges from "../assets/images/product-image/organic/product-10.jpg"
import strawberry from "../assets/images/product-image/organic/product-6.jpg"
import TunaFish from "../assets/images/product-image/organic/product-16.jpg"
import PomegranateJuice from "../assets/images/product-image/organic/product-22.jpg"
import Tomato from "../assets/images/product-image/organic/product-18.jpg"
import feat1 from "../assets/images/icons/policy.png";
import feat2 from "../assets/images/icons/policy-2.png";
import feat3 from "../assets/images/icons/policy-3.png";
import personicon from "../assets/images/icons/person.png"
import revicon from "../assets/images/icons/review.png"
const Singleproductgroup = props =>{

    const initialProduct = {
        id: null,
        productname: "",
        about : "",
        category : "",
        reviews : [],
        image:""
    };
    const [viewdis,setview] = useState("details");
    const [ itemquant,setQuant] = useState(1);
    const[product , setProduct] = useState(initialProduct);
    const getProduct=id=>{
        ProductDataService.get(id)
        .then(response =>{
            setProduct(response.data);
            console.log(response.data)
        })
        .catch(e=>{
            console.log(e);
        })
    }
     useEffect(()=>{
        getProduct(props.match.params.id);

    },[props.match.params.id]); 

    const deleteReview = (reviewId ,index)=>{
        ProductDataService.deleteReview(reviewId)
        .then(response=>{
            setProduct((prevState)=>{
                prevState.reviews.splice(index,1)
                return({
                    ...prevState
                })
            })
        })
        .catch(e=>{
            console.log(e);
        })
    };
    

    const [pimage, setpimage] = useState(lemon);
    useEffect(()=>{
        if(product.productname==="lemon"){
            setpimage(lemon);
        }
        else if(product.productname === "fruit juice"){
            setpimage(fruitjuice)
        }
        else if(product.productname === "Apricot"){
            setpimage(apricot)
        }
        else if(product.productname ==="Tomato"){
            setpimage(Tomato)
        }
        else if(product.productname === "Oranges"){
            setpimage(oranges)
        }
        else if(product.productname === "Strawberry"){
            setpimage(strawberry)
        }
        else if(product.productname === "Tuna Fish"){
            setpimage(TunaFish)
        }
        else if(product.productname === "Pomegranate Juice"){
            setpimage(PomegranateJuice)
        }

        window.scrollTo(0,200)
    })
    
        return(
            <div>
                    <div>
            <section className="product-details-area mtb-60px">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="single-product-slider">
                                <div className="single-product-gallery d-flex flex-wrap">
                                    <div className="single-product-slider-item">
                                        <img className="zoompro" style={{width:"500px"}} src={pimage} alt="" />
                                    </div>
                                    <div className="single-product-slider-item">
                                        <img src="assets/images/product-image/organic/product-11.jpg" alt="" />
                                    </div>
                                    <div className="single-product-slider-item">
                                        <img src="assets/images/product-image/organic/product-12.jpg" alt="" />
                                    </div>
                                    <div className="single-product-slider-item">
                                        <img src="assets/images/product-image/organic/product-13.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-details-content">
                                <h2>{product.productname}</h2>
                                <p className="reference">Reference:<span> demo_17</span></p>
                                <div className="pro-details-rating-wrap">
                                    <div className="rating-product">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                    </div>
                                    <span><a className="reviews" href="#">Read reviews (1)</a></span>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">€{product.price}</li>
                                    </ul>
                                </div>
                                <p>{product.about}</p>
                                {/* <!--<div className="pro-details-list">
                                    <ul>
                                        <li>- 0.5 mm Dail</li>
                                        <li>- Inspired vector icons</li>
                                        <li>- Very modern style</li>
                                    </ul>
                                </div>--> */}
                                <div className="pro-details-quality mt-0px">
                                <div className="cart-plus-minus">
                                    <div className="dec qtybutton" onClick={()=>setQuant(itemquant-1)}>-</div>
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value={itemquant} />
                                    <div className="inc qtybutton" onClick={()=>setQuant(itemquant+1)}>+</div>
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
                                        <li><img src={feat1} alt="" /><span>Security Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><img src={feat2} alt="" /><span>Delivery Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><img src={feat3} alt="" /><span>Return Policy (Edit With Customer Reassurance Module)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <div className="description-review-area mb-60px">
                <div className="container">
                    <div className="description-review-wrapper">
                        <div className="description-review-topbar nav">
                            <a className={viewdis === "description" ? "active" : ""} onClick={()=>setview("description")} data-toggle="tab" href="#des-details1">Description</a>
                            <a className={viewdis === "details" ? "active" : ""} onClick={()=>setview("details")} data-toggle="tab" href="#des-details2">Product Details</a>
                            <a className={viewdis === "reviews" ? "active" : ""} onClick={()=>setview("reviews")} data-toggle="tab" href="#des-details3">Reviews (2)</a>
                        </div>
                        <div className="tab-content description-review-bottom">
                            <div id="des-details2" className={viewdis === "details"? "tab-pane active":"tab-pane"}>
                                <div className="product-anotherinfo-wrapper">
                                    <ul>
                                        <li><span>Weight</span> 400 g</li>
                                        <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                        <li><span>Materials</span> 60% Corn, 40% Other Ingredients</li>
                                        <li><span>Other Info</span> Produced in India</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="des-details1" className={viewdis ==="description"? "tab-pane active":"tab-pane"}>
                                <div className="product-description-wrapper">
                                    <p>{product.about}</p>
                                    
                                </div>
                            </div>
                            <div id="des-details3" className={viewdis === "reviews"? "tab-pane active":"tab-pane"}>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="review-wrapper">
                                            {product.reviews.map((reviews,index)=>{
                                                return(
                                            <div className="single-review">
                                                <div className="review-img">
                                                    <img src={personicon} alt="" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>{reviews.name}</h4>
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
                                                            {reviews.text}

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                                );
                                                })
}
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
            </div>
           

            </div>
        );
    }


export default Singleproductgroup;