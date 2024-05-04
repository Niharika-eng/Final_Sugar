import React from 'react';
import './FeedbackForm.css'

export default function FeedbackForm() {
  return (
    <div>
      <form action="http://localhost:3000/submit-form" method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" name="name" required />
        </div>
    
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="abc123@xyz.com" name="email" required />
        </div>
    
        <div>
          <label htmlFor="rating">Rating:</label>
          <input type="range" id="rating" name="rating" min="1" max="5" required />
        </div>
    
        <div>
          <label htmlFor="feedback">Feedback:</label><br />
          <textarea id="feedback" name="feedback" rows="4" required></textarea>
        </div>
    
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
