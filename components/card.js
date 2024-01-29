import React from 'react';
import './card.css';
function Card({card}) {
  return (
    <div className="card">
<div className="image-container">
{/* <img src="https://pngimg.com/uploads/cap/cap_PNG5686.png" alt="cap-image"/> */}
<img src={card.image} alt={`Image of ${card.color}`}  />
</div>
<div className="contact-details">
    <p>{card.heading}</p> 
    <div className="mini-details">
    <p >{card.color}</p>
    <p><b>${card.price} </b></p>
    </div>
</div>
     
    </div>
  )
}

export default Card;
