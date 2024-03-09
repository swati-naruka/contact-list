import React from 'react';
import './contacts.css';
function Contact({ name, phone, onDelete}) {
    
  return (
    <>
    
    
    <div className="contact">
      <div className="contact-name">
        <h3>Name: {name}  </h3>
        
      </div>
      <div className="contact-number">
        <h3>Number : {phone}</h3>
      </div>
      <div className='btn'>
        <button id="delete-btn" onClick={onDelete}>Delete</button>
    </div>
    </div>
    
  
  </>
  )
}

export default Contact
