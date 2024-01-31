import React from 'react';
import Card from './card'; // Import the Car component
import './card.css';
import Star from './star';
const CarList = ({card,handleAddtoCart}) => {
   
  return (
    <div className="card-list">
     {card.map((card)=>(
      <Card key={card.id} card={card} onAddToCart={handleAddtoCart} />
     ))}
    </div>
  );
};

export default CarList;