import React from 'react';
import Card from './card'; // Import the Car component
import './card.css';
const CarList = ({card}) => {
   
  return (
    <div className="card-list">
     {card.map((card)=>(
      <Card key={card.id} card={card} />
     ))}
    </div>
  );
};

export default CarList;