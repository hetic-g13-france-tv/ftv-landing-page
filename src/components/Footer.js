import React, { Component } from "react";
import '../assets/footer.scss';

class Footer extends Component {
    render(){
        return(
            <div className="container">
                <ul className="footer">
                    <li className="footer_items">Devenir annonceur</li>
                    <li className="footer_items">CGU</li>
                    <li className="footer_items">mentions légales</li>
                    <li className="footer_items">espace confidedntialité</li>
                    <li className="footer_items">aide et contact</li>
                    <li className="footer_items">pourqoi s'inscrire</li>
                    <li className="footer_items">gestion des cookies</li>
                </ul>          
            </div>
        );
    }
}

export default Footer;