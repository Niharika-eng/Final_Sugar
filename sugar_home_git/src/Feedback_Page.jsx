import React from 'react';
import './Feedback_Page.css';
import { Link } from 'react-router-dom';

export default function Feedback_Page() {
  return (
    <div id='feedback'>
      <div className="card cardf text-center mb-3">
        <div className="card-body cardf-body">
          <h5 className="cardf-title1">Drop a </h5>
          <h5 className="cardf-title2">Feedback!</h5>
          <p className="card-text cardf-text">Your feedback is valuable to us.<br/>Do take some time and fill out your experience with Sugar was!</p>
          <Link to='/FeedbackForm' className="btn btn-danger">Give Feedback</Link>
        </div>
      </div>
    </div>
  );
}
