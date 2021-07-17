import React from "react";
import "../components/Header.css";
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, List, ListInlineItem  } from 'reactstrap';
//import "D:/internship/B2b/ecolife/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/style.min.css";
import "../assets/css/responsive.min.css";
import "../assets/css/vendor/plugins.min.css";

class Breadcrumbarea extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-hrading">{this.props.page}</h1>
                                <ul className="breadcrumb-links">
                                    <li><a href="index.html">Home</a></li>
                                    <li>{this.props.pagename}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumbarea;