import React from "react";
import ProductDataService from "../services/products.js"
import "../assets/css/style.min.css";
import "../assets/css/responsive.min.css";
import "../assets/css/vendor/plugins.min.css";
import "D:/internship/B2b/ecolife/node_modules/font-awesome/css/font-awesome.min.css";
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";
import { useState, useEffect } from "react";
const Shop_category = props =>{
    const [products , setProducts] = useState([]);
  const [searchName, setSearchName ] = useState("");
  const[searchCategories, setSeacrhCategory] = useState("");
  const [categories , setCategories] = useState(["All Categoryes"]);

    const [sortoption , togglesortop] = useState(false);
    const [sorttype, setSort] = useState(["Sort by newness"]);
    const[viewtype ,setView] = useState(["list"]);
    useEffect(()=>{setView("list")},[])
    const setviewtype =(viewtype)=>{
        setView(viewtype);
    }
    useEffect(()=>{setSort("Sort by newness")},[])
    const setsorttype=(sorttype)=>{
        setSort("Sort by newness")
    };
    useEffect(()=>{
        retrieveProducts();
        retriveCategories();
      },[]);
      const retrieveProducts=()=>{
        ProductDataService.getAll().then(
          response=>{
            console.log(response.data);
            setProducts(response.data.products);
          }
        ).catch(e=>{
          console.log(e);
        });
      };
      const retriveCategories=()=>{
        ProductDataService.getCategories()
        .then(response=>{
          console.log(response.data);
          setCategories(["All Categories"].concat(response.data))
        })
        .catch(e=>{
          console.log(e);
        });
      }
      const onChangeSearchName= e =>{
        const searchName=e.target.value;
        setSearchName(searchName);
      }
      const refreshList=()=>{
        retrieveProducts();
      }
      const find = (query,by)=>{
        ProductDataService.find(query,by)
        .then(response=>{
          console.log(response.data);
          setProducts(response.data.products)
        })
        .catch(e=>{
          console.log(e);
        });
      }
      const findByName=()=>{
        find(searchName,"name")
      };
    
    return(
        <div className="shop-category-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
{/*                             <!-- Shop Top Area Start -->
 */}                            <div className="shop-top-bar">
{/*                                 <!-- Left Side start -->
 */}                                <div className="shop-tab nav mb-res-sm-15">
                                    <a className={viewtype === "grid"?"active":""} href="#shop-1" onClick={()=>{setView("grid")}} data-toggle="tab">
                                        <i className="fa fa-th show_grid"></i>
                                    </a>
                                    <a className={ viewtype === "list"?"active":""} href="#shop-2" onClick={()=>{setView("list")}} data-toggle="tab">
                                        <i className="fa fa-list-ul"></i>
                                    </a>
                                    <p>There Are 17 Products.</p>
                                </div>
                               {/*  <!-- Left Side End -->
                                <!-- Right Side Start --> */}
                                <div className="select-shoing-wrap">
                                    <div className="shot-product">
                                        <p>Sort By:</p>
                                    </div>
                                    <div className="shop-select" style={{display:'none'}}>
                                        <select>
                                            <option value="">Sort by newness</option>
                                            <option value="">A to Z</option>
                                            <option value=""> Z to A</option>
                                            <option value="">In stock</option>
                                        </select>
                                    </div>
                                    <div className={sortoption?"nice-select open":"nice-select"} onClick={()=>togglesortop(!sortoption)} tabindex="0">
                                        <span className="current">{sorttype}</span>
                                        <ul className="list">
                                            <li data-value="" className={ sorttype === "Sort by newness" ? "option selected focus": "option"} onClick={()=>setSort("Sort by newness")}>Sort by newness</li>
                                            <li data-value="" className={ sorttype === "A to Z"?"option selected focus": "option"} onClick={()=>setSort("A to Z")}>A to Z</li>
                                            <li data-value="" className={ sorttype === "Z to A"?"option selected focus": "option"} onClick={()=>setSort("Z to A")}> Z to A</li>
                                            <li data-value="" className={ sorttype === "In stock"?"option selected focus": "option"} onClick={()=>setSort("In stock")}>In stock</li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Right Side End -->
 */}                            </div>
{/*                             <!-- Shop Top Area End -->
 */}
{/*                             <!-- Shop Bottom Area Start -->
 */}                            <div className="shop-bottom-area mt-35">
{/*                                 <!-- Shop Tab Content Start -->
 */}                                <div className="tab-content jump">
{/*                                     <!-- Tab One Start -->
 */}                                    <div id="shop-1" className={viewtype === "grid"?"tab-pane active":"tab-pane"}>
                                        <div className="row">
                                        {products.map((product)=>{
                                            return(
                                            <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                                <article className="list-product">
                                                    <div className="img-block">
                                                        <a href={"/Single_product/"+product._id} className="thumbnail">
                                                            <img className="first-img" src={product.image} alt="" />
                                                            <img className="second-img" src={product.image} alt="" />
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
                                                        <a className="inner-link" href="shop-4-column.html"><span>{product.category}</span></a>
                                                        <h2><a href={"/Single_product/"+product._id} className="product-link">{product.productname}</a></h2>
                                                        <div className="rating-product">
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                        </div>
                                                        <div className="pricing-meta">
                                                            <ul>
                                                                <li className="old-price not-cut">€{product.price}</li>
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
                                            );})}   
                                        </div>
                                    </div>
                                 {/*    <!-- Tab One End -->
                                    <!-- Tab Two Start --> */}
                                    <div id="shop-2" className={viewtype==="list"?"tab-pane active":"tab-pane"}>
                                    {products.map((product)=>{
                                                        return(
                                        <div className="shop-list-wrap mb-30px scroll-zoom">
                                            <div className="row list-product m-0px">
                                                <div className="col-md-12">
                                                
                                                    <div className="row">
                                                    
                                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div className="left-img">
                                                                <div className="img-block">
                                                                    <Link to={"/Single_product/"+product._id} className="thumbnail">
                                                                        <img className="first-img" src={product.image} alt="" />
                                                                        <img className="second-img" src={product.image} alt="" />
                                                                    </Link>
                                                                    <div className="quick-view">
                                                                        <Link className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                                            <i className="ion-ios-search-strong"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <ul className="product-flag">
                                                                    <li className="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                            <div className="product-desc-wrap">
                                                                <div className="product-decs">
                                                                    <Link className="inner-link" href="shop-4-column.html"><span>{product.category}</span></Link>
                                                                    <h2><Link to={"/Single_product/"+product._id} className="product-link">{product.productname}</Link></h2>
                                                                    <div className="rating-product">
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                    </div>
                                                                    <div className="pricing-meta">
                                                                        <ul>
                                                                            <li className="old-price not-cut">€{product.price}</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product-intro-info">
                                                                        <p>{product.about}</p>
                                                                    </div>
                                                                    <div className="in-stock">Availability: <span>300 In Stock</span></div>
                                                                </div>
                                                                <div className="add-to-link">
                                                                    <ul>
                                                                        <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                                                        <li>
                                                                            <Link href="wishlist.html"><i className="ion-android-favorite-outline"></i></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="compare.html"><i className="ion-ios-shuffle-strong"></i></Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                );
                            })}
                                    </div>
{/*                                     <!-- Tab Two End -->
 */}                                </div>
                               {/*  <!-- Shop Tab Content End -->
                                <!--  Pagination Area Start --> */}
                                <div className="pro-pagination-style text-center">
                                    <ul>
                                        <li>
                                            <Link className="prev" href="#"><i className="ion-ios-arrow-left"></i></Link>
                                        </li>
                                        <li><Link className="active" href="#">1</Link></li>
                                        <li><Link href="#" onclick="alert('No more items to shows')">2</Link></li>
                                        <li>
                                            <Link className="next" href="#" onclick="alert('No more items to show')"><i className="ion-ios-arrow-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
{/*                                 <!--  Pagination Area End -->
 */}                            </div>
{/*                             <!-- Shop Bottom Area End -->
 */}                        </div>
{/*                         <!-- Sidebar Area Start -->
 */}                        <div className="col-lg-3 order-lg-first col-md-12 order-md-last mb-res-md-60px mb-res-sm-60px">
                            <div className="left-sidebar">
                                <div className="sidebar-heading">
                                    <div className="main-heading">
                                        <h2>Filter By</h2>
                                    </div>
{/*                                     <!-- Sidebar single item -->
 */}                                    <div className="sidebar-widget">
                                        <h4 className="pro-sidebar-title">Categories</h4>
                                        <div className="sidebar-widget-list">
                                            <ul>
                                                <li>
                                                    <div className="sidebar-widget-list-left">
                                                        <input type="checkbox" /> <a href="#">Fresh Fruit<span>(17)</span> </a>
                                                        <span className="checkmark"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sidebar-widget-list-left">
                                                        <input type="checkbox" value="" /> <a href="#">Fresh Vegetables <span>(17)</span></a>
                                                        <span className="checkmark"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sidebar-widget-list-left">
                                                        <input type="checkbox" value="" /> <a href="#">Fresh Salad & Dips<span>(17)</span> </a>
                                                        <span className="checkmark"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sidebar-widget-list-left">
                                                        <input type="checkbox" value="" /> <a href="#">Milk,Butter & Eggs<span>(17)</span> </a>
                                                        <span className="checkmark"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
{/*                                     <!-- Sidebar single item -->
 */}                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                                <div className="sidebar-widget mt-20">
                                    <h4 className="pro-sidebar-title">Price</h4>
                                    <div className="price-filter mt-10">
                                        <div className="price-slider-amount">
                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                        </div>
                                        <div id="slider-range"></div>
                                    </div>
                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                                <div className="sidebar-widget mt-30">
                                    <h4 className="pro-sidebar-title">Size</h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">X<span>(4)</span> </a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">M<span>(4)</span></a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">L<span>(4)</span> </a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">XL<span>(4)</span> </a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                                <div className="sidebar-widget no-cba mt-20">
                                    <h4 className="pro-sidebar-title">Colour</h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">Grey<span>(2)</span> </a>
                                                    <span className="checkmark grey"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">White<span>(4)</span></a>
                                                    <span className="checkmark white"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">Black<span>(4)</span> </a>
                                                    <span className="checkmark black"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">Camel<span>(4)</span> </a>
                                                    <span className="checkmark camel"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                                <div className="sidebar-widget mt-30">
                                    <h4 className="pro-sidebar-title">Brand</h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">GROCERY<span>(10)</span> </a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">GROCERY<span>(7)</span></a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                                <div className="sidebar-widget mt-30">
                                    <h4 className="pro-sidebar-title">Dimension</h4>
                                    <div className="sidebar-widget-list">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">40x60<span>(5)</span> </a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">60x90<span>(5)</span></a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" value="" /> <a href="#">90x120<span>(5)</span> </a>
                                                    <span className="checkmark"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                                <div className="sidebar-widget tag mt-30">
                                    <div className="main-heading">
                                        <h2>Tag</h2>
                                    </div>
                                    <div className="sidebar-widget-tag">
                                        <ul>
                                            <li><Link href="#">Fresh Fruit</Link></li>
                                            <li><Link href="#"> Fresh Vegetables</Link></li>
                                            <li><Link href="#">Fresh Salad</Link></li>
                                            <li><Link href="#"> Butter & Eggs</Link></li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Sidebar single item -->
 */}                            </div>
                        </div>
{/*                         <!-- Sidebar Area End -->
 */}                    </div>
                </div>
            </div>
    );
}


export default Shop_category;