import React, { Component } from "react";
import '../assets/service.scss';

class Service extends Component {
    render(){
        return(
            <div className="service_container">
                <div className="service_container--first">
                    <div className="service_container_image">
                        <img src="/static/section_2.png"/>
                    </div>
                    <div className="service_container_text">
                        <h1 className="service_container_text-title">Dis-lui : « Donne moi une punchline sur Mbappé »</h1>
                        <p className="service_container_text-subtitle">Tacle le joueur de ton choix.</p>
                    </div>
               </div> 
               <div className="service_container--second">
                    <div className="service_container_text">
                        <h1 className="service_container_text-title">Partage la en story et fais marrer ton entourage</h1>
                        <p className="service_container_text-subtitle">La punchline sera visible 24 heures, par tes amis, collègues, famille…</p>
                    </div>
                    <div className="service_container_image">
                        <img src="/static/section_3.png"/>
                    </div>
               </div>
               <div className="service_container--third">
                    <div className="service_container_text">
                        <h1 className="service_container_text-title">Découvre le top punchlines et crée ton propre tacle !</h1>
                        <p className="service_container_text-subtitle">Après chaque match, nous challengeons ta créativité en t’invitant à créer ton propre tacle. Si tu as le plus de likes, il sera intégré à l’assistant vocal !</p>
                        <a className="service_container_text-cta">Voir les tops punchlines</a>
                    </div>
                    <div className="service_container_image">
                        <img src="/static/section_4.png"/>
                    </div>
               </div>   
            </div>
        );
    }
}

export default Service;