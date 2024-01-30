import React, { useState } from 'react';

import './card.css';
import Star from './star';
function Card({card}) {
  console.log(card)
const [selectedColorIndex, setSelectedColorIndex]=useState(0);
  if (!card||!card.colors || !card.color_images) {
    return null; 
  }
  const colors = card.colors.split(',');
  const colorImages = card.color_images.split(',');
  const handleColorButtonClick = (index) => {
    setSelectedColorIndex(index);
  };
  return (
    <div className="card">
<div className="image-container">
{/* <img src="https://pngimg.com/uploads/cap/cap_PNG5686.png" alt="cap-image"/> */}
<img src={colorImages[selectedColorIndex]} alt={`Image of ${colors[selectedColorIndex]}`}  />
</div>
<div className="contact-details">
    <p><b>{card.heading}</b></p> 
    <div className="mini-details">
    {/* <p >{card.color}</p> */}
    <p><b>${card.price} </b></p>
    <div className="color-buttons">
           {colors.map((color,index)=>
              <button key={index} className="color-button" style={{backgroundColor:color}} onClick={() => handleColorButtonClick(index)}  ></button>
              )}
    </div>
    
    <div className="stars-css">
    <Star stars={card.stars}/>
    </div>
    </div>
</div>
     
    </div>
  )
}

export default Card;
