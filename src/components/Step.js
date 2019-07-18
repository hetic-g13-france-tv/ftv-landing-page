import React, { Component } from "react";
import '../assets/step.scss';

class Step extends Component {
    render(){
        return(
            <div className="step_container">
                <div className="step_container_text">
                    <h1 className="step_container_text-title">Télécharge l’app france.tv et  active ton assistant vocal</h1>
                    <img src="/static/cta_download.png" className="step_container_text-cta"/>
                </div>
            </div>
        );
    }
}

export default Step;