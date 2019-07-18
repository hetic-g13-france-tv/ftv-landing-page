import React, { Component } from "react";
import '../assets/service.scss';

class Service extends Component {
    render(){
        return(
            <div className="service_container">
                <div className="service_container--first">
                    <div className="service_container_image">
                        <img />
                    </div>
                    <div className="service_container_text">
                        <h1 className="service_container_text-title">Plus besoin d’écrire, Alexa est 
là pour vous !</h1>
                        <p className="service_container_text-subtitle">Lorem ipsum</p>
                    </div>
               </div> 
               <div className="service_container--second">
                    <div className="service_container_text">
                        <h1 className="service_container_text-title">Plus besoin d’écrire, Alexa est 
là pour vous !</h1>
                        <p className="service_container_text-subtitle">Lorem ipsum</p>
                    </div>
                    <div className="service_container_image">
                        <img />
                    </div>
               </div>
               <div className="service_container--third">
                    <div className="service_container_image">
                        <img />
                    </div>
                    <div className="service_container_text">
                        <h1 className="service_container_text-title">Plus besoin d’écrire, Alexa est 
là pour vous !</h1>
                        <p className="service_container_text-subtitle">Lorem ipsum</p>
                    </div>
               </div>   
            </div>
        );
    }
}

export default Service;