import React, { useState } from 'react';
import '../styles/App.css'

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}> {readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'See more'}
          </button>
        <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
          Delete
        </button>
    </article>
  );
};

export default Tour;