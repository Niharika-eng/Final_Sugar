import React from 'react'
import ReactDom from 'react-dom'
import './About_Us.css';
import Sprinkle2 from './assets/Sprinkles1 (2).svg'
import Sprinkle3 from './assets/Sprinkles1 (3).svg'




export default function About_Us(){
    return(
        <div id="about">
               <div class="img-container">
                <div class="image-wrapper">
                    <img src={Sprinkle2}/>
                    <img src={Sprinkle3}/>
                </div>
            </div> 
            <h1 class="about_heading">Sip, Smile</h1>
            <h1 class="about_heading_1">Sugar!</h1>
            <p>
            Step into Sugar, where the inviting aroma of freshly brewed coffee and baked goods fills the air. The cozy ambiance, perfect for catching up with friends, with comfortable seating and lively music adds up to the experience. At Sugar, it's not just about the food and drinks; it's about creating memories and moments of joy. Whether you're looking for a quick coffee break or a leisurely hangout spot, Sugar offers a charming setting where you can relax, unwind, and enjoy the sweet moments of life
            </p>
        </div>
    )
}