import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './star.css'

const Star = ({ noOfStars = 5 }) => {
  // -1 means no star is selected/hovered
  const [rating, setRating] = useState(-1)
  const [hover, setHover] = useState(-1)

  // Set rating, or deselect if clicking the same star
  function handleClick(index) {
    setRating(rating === index ? -1 : index)
  }

  // Set hover index
  function handleMouseEnter(index) {
    setHover(index)
  }

  // Reset hover index
  function handleMouseLeave() {
    setHover(-1)
  }

  return (
    <div className="star-rating" >
      {[...Array(noOfStars)].map((_, index) => (
        <FaStar
          key={index}
          size={40}
          // Use hover if active, else use rating
          color={
            index <= (hover !== -1 ? hover : rating)
              ? 'gold'
              : 'gray'
          }
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer', transition: 'color 0.2s' }}
        />
      ))}
    </div>
  )
}

export default Star