import React, { Component } from "react";
import classnames from "classnames";

import '../assets/navbar.scss';

export default class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: true
          };
    }

    componentDidMount() {
        this.setState({
            window,
            prevScrollpos: window.pageYOffset,

        }, () => {
            this.state.window.addEventListener("scroll", this.handleScroll);
        }); 
    }

    componentWillUnmount() {
        this.state.window.removeEventListener("scroll", this.handleScroll);
      }
      
    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = this.state.window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
      
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    render(){
        return(
            <div className="container">
               <div className={classnames("container--first",{
                   "container--first--hidden": !this.state.visible
               })}>
                    <div className="nav nav--left">
                        <img className="nav_img" src="/static/logo.png"/>
                    </div>
                    <div className="nav nav--right">
                        <div className="nav_items"><img src="/static/star.png"/></div>
                        <div className="nav_items"><img src="/static/messages.png"/></div>
                        <div className="nav_items"><button className="nav_items-button">Connexion</button></div>
                    </div>
                </div>
                <div className={classnames("container--second",{
                   "container--second--scrolled": !this.state.visible
               })}>
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

