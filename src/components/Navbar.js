import React, { Component } from "react";
import '../assets/navbar.scss';

class Navbar extends Component {
    render(){
        return(
            <div className="container">
               <div className="container--first">
                    <div className="nav nav--left">
                        <img className="nav_img" src="/static/logo.png"/>
                    </div>
                    <div className="nav nav--right">
                        <div className="nav_items"><img /></div>
                        <div className="nav_items"><img src="/static/messages.png"/></div>
                        <div className="nav_items"><button className="nav_items-button">Connexion</button></div>
                    </div>
                </div>
                <div className="container--second">
                <ul className="menu">
                    <li className="menu_items">chaînes</li>
                    <li className="menu_items">catégories</li>
                    <li className="menu-items menu-image"><img src="/static/logo.png"/></li>
                    <li className="menu_items">mes vidéos</li>
                    <li className="menu_items menu-search">rechercher</li>
                </ul>
                </div>            
            </div>
        );
    }
}

export default Navbar;