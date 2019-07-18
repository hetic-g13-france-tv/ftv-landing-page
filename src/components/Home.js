import React, { Component } from "react";
import '../assets/footer.scss';

class Home extends Component {
    render(){
        return(
            <div className="home_container">
               <div className="home_container--first">
                    <div className="home_container_text">
                        <h1 className="home_container_text-title">Apprenez et testez vos connaissances sur le foot 
    avec france quizz et Alexa</h1>
                        <p className="home_container_text-subtitle">Lorem ipsum</p>
                    </div>
               </div> 
               <div className="home_container--second">
                    <div className="home_container_image">
                        <img />
                    </div>
               </div>  
            </div>
        );
    }
}

export default Home;