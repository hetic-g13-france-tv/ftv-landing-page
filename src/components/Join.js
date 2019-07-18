import React, { Component } from "react";
import '../assets/join.scss';

class Join extends Component {
    render(){
        return(
            <div className="join_container">
                <h2 className="join_container-title">Rejoingez-nous !</h2>
                <div className="join_container--second">
                    <div className="join_container_content">
                        <img className="join_container_content-image" />
                        <p className="join_container_content-text">Apprenez sur le football 
en vous amusant</p>
                    </div>
                    <div className="join_container_content">
                        <img className="join_container_content-image" />
                        <p className="join_container_content-text">Brillez en société avec vos connaissances</p>
                    </div>
                    <div className="join_container_content">
                        <img className="join_container_content-image" />
                        <p className="join_container_content-text">Outil utilisable à la voix
simple et facile</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Join;