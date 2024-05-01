import React from 'react'
import ReactDom from 'react-dom'
import './Hero_Page.css';

export default function Hero_Page(){
    return(
        <div id='home'>
            <div class="image-container">
                <img src="src\assets\HeroImage.jpg" class="Myimage"/>
                <div className="image-overlay"></div>
                    <h1 class="centered-heading">Sugar</h1>
                    <h3 class="sub-heading">Thickshakes | Coffee & More</h3>
            </div>
        </div>
    )
}