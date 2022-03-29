import React, { Component } from "react";
import "./nav.scss"

class Nav extends Component {
    render(){
        return(
            <nav className="nav_bar">
                <a href="#">Home</a>
                <a href="#Potfolio">Potfolio</a>
                <a href="#Faq">Faq</a>
                <a href="#Contato">Contato</a>
            </nav>
        )
    }  
}
export default Nav