import React, { Component } from "react";
import '../assets/footer.scss';

class Home extends Component {
    render(){
        return(
            <div className="home_container">
               <div className="home_container--first">
                    <div className="home_container_text">
                        <h1 className="home_container_text-title">Clash les joueurs de foot avec les tacles de footcaviar <span>footcaviar</span></h1>
                        <p className="home_container_text-subtitle">Demande à ton assistant vocal de te trouver une punchline sur un joueur et partage la autour de toi.</p>
                    </div>
               </div> 
               <div className="home_container--second">
                    <div className="home_container_image">
                        <img src="/static/hero.png"/>
                    </div>
               </div>  
            </div>
        );
    }
}

export default Home;