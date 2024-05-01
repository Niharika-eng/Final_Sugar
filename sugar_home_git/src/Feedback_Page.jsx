import React from 'react';
import ReactDom from 'react-dom';
import './Feedback_Page.css';

export default function Feedback_Page() {
  return (
    <div id='feedback'>
      <div class="card cardf text-center mb-3">
        <div class="card-body cardf-body">
            <h5 class="cardf-title1">Drop a </h5>
            <h5 class="cardf-title2">Feedback!</h5>
            <p class="card-text cardf-text">Your feedback is valuable to us.<br/>Do take some time and fill out your experience with Sugar was!</p>
            <a href="#" class="btn btn-danger">Give Feedback</a>
        </div>
      </div>
    </div>
  );
}
