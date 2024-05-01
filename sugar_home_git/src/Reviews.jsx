import React from 'react';
import ReactDom from 'react-dom';
import './Reviews.css';
import Sprinkle2 from './assets/Sprinkles1 (2).svg';
import Sprinkle3 from './assets/Sprinkles1 (3).svg';

export default function Reviews() {
  return (
    <div id='review'>
      <div class="img2-container">
        <div class="image-wrapper">
          <img src={Sprinkle2} />
          <img src={Sprinkle3} />
        </div>
      </div>

      <div class="reviews-headings">  {/* New container for headings */}
        <h1 class="reviews_heading">Reviews</h1>
        <h1 class="reviews_heading_1">From Customers</h1>
      </div>

      <div class="cardie_1">
        <img src="/src\assets\dd0808.png"/>
        <p class="cardie1_text">Absolutely loved the vibes...Made some new memories accompanied with ice creams and thickshakes</p>
      </div>

      <div class="cardie_2">
        <img src="/src\assets\dd0808.png"/>
        <p class="cardie2_text">I came here to celebrate my birthday and I would definitely say that the friendly staff made sure it was a memroable one. Try anything, and it’s so good! The prices are so reasonable!</p>
      </div>

      <div class="cardie_3">
        <img src="/src\assets\dd0808.png"/>
        <p class="cardie3_text">Perfect place to keep your taste buds happy and chill out with your friends, even family.</p>
      </div>

      


      </div>
    )
}