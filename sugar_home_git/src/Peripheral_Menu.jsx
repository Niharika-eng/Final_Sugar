import React, { useEffect, useState } from 'react';
import './Peripheral_Menu.css';
import Sprinkle2 from './assets/Sprinkles1 (2).svg';
import Sprinkle3 from './assets/Sprinkles1 (3).svg';

export default function Peripheral_Menu() {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/menu');
        if (!response.ok) throw Error('Did not receive expected data');
        const result = await response.json();
        console.log(result);

        setData(result);
        setFetchError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setFetchError(err.message);
      }
    };

    fetchItems(); // Call fetchItems only once when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div id='pmenu'>
      <div className="img1-container">
        <div className="image-wrapper">
          <img src={Sprinkle2} alt="Sprinkle" />
          <img src={Sprinkle3} alt="Sprinkle" />
        </div>
      </div>

      <div className="menu-headings">  
        <h1 className="menu_heading">Our</h1>
        <h1 className="menu_heading_1">Menu</h1>
      </div>

      <div className="card-container">
        {data && data.map((menu, index) => (
          <div class="card1" key={index}>
            <div class="card my-card-size">
              <img src={menu.image} class="card-img-top" alt="Card" />
              <div class="card-body">
                <p class="card-text">{menu.Caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
