import React from 'react'
import ReactDom from 'react-dom'
import './Navbar.css';
import Headroom from 'react-headroom';

export default function Navbar(){
  return(
    <Headroom>
    <div class="whole_thing">
      <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container-fluid">
          <a class="navbar-brand navbar-font" href="#" style={{ color: '#ffff' }}>Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#home" style={{ color: '#ffff' }}>Home</a>
              <a class="nav-link" href="#about" style={{ color: '#ffff' }}>About</a>
              <a class="nav-link" href="#pmenu" style={{ color: '#ffff' }}>Menu</a>
              <a class="nav-link" href="#review" style={{ color: '#ffff' }}>Reviews</a>
              <a class="nav-link" href="#feedback" style={{ color: '#ffff' }}>Feedback</a>
              <a class="nav-link" href="#" style={{ color: '#ffff' }}>Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </Headroom>
  )
}



