import React, { useEffect } from 'react'
import Carditem from './Carditem'
import './Cards.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Cards(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className = "cards">
            <h1>Destinatons</h1>
            <div data-aos="fade-up"
                data-aos-duration="1300" className = "cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Carditem
                            src= "Images/attabadlake.jpg"
                            text = "Visit Attabad lake Hunza to enjoy jet skiing
                            fishing boating and myriad other recreational activities"
                            label = "ATTABAD LAKE"
                            path = "/packages"
                        />

                        <Carditem
                            src='images/kumrat.jpg'
                            text='Travel through Kumrat valley full of dense pines, tall dark mountains, waterfalls and raging rivers.'
                            label='KUMRAT VALLEY'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards-items" data-aos="fade-up"
                data-aos-duration="1200"> 
                        <Carditem
                        
                            src='images/RattiGali.JPG'
                            text='Visit alpine glacial lake in Neelum Valley.'
                            label='RattiGali'
                            path='/'
                        />
                        <Carditem
                            src='images/Fairym.jpg'
                            text='Trek towards heavens on Earth.'
                            label='Fairy Meadows'
                            path='/'
                        />
                        <Carditem
                            src='images/saifulmalook.jpg'
                            text='Mesmerize yourself by beauty of greenish-blue crystal clear water, surrounded by giant glaciers.'
                            label='Naran'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards