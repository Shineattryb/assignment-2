import React from 'react'
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import './star.css';
const Star=({stars})=>{
    const scaledStars=Math.ceil(stars/2);
   const ratingstar= Array.from({length:5},(elem,index)=>{
let number=index;
  
    return(
        
        <span key={index}>
            {
                scaledStars>= index +1 ?<FaStar className='icon'/>: scaledStars>=number ?<FaStarHalfAlt className='icon'/>:<AiOutlineStar className='icon'/>
            }
        </span>
     
    )
        });



    return (
        <>
       {ratingstar}
        </>
    )
}
export default Star;
