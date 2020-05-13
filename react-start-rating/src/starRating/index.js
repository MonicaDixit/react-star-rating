import React , {useState} from 'react';
import { FaStar} from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
    <div>
      {
          [...Array(5)].map((star, i) => {
              const ratingValue = i+1 ;
              return (
                  <label>
                      <input type="radio" 
                      name="rating" 
                      onClick={() => setRating(ratingValue)}
                      
                      />
                      <FaStar size={100} 
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      color={ratingValue <= (hover || rating) ?'#ffc107': 'gray' }></FaStar>
                  </label>
              );
          })
      }

    <p>the rating is {rating}</p>
    </div>)
}

export default StarRating;
