import React, { useState } from 'react'

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [toggleText, setToggleText] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer style={{ padding: '2rem' }}>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {toggleText ? info : `${info.substr(0, 200)}`}
          <button onClick={() => setToggleText(!toggleText)}>
            {toggleText ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
