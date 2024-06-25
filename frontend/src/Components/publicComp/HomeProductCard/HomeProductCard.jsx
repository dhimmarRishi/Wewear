import React from 'react'
import './HomeProductCard.css'

function HomeProductCard({product, onClick}) {
  const { image, name, color, price } = product;
  // console.log(product)
  return (
    <div className='p-1 card' onClick={onClick}>
      <div className='img-cover'>
        <img src={image} alt="Slipper Image" />
      </div>
      <div className='p-1 img-info'>
        <p className='title'>{name}</p>
        <p className='p-1 thin'>{color}</p>
        <p className='p-1 thin'>Rs. {price}</p>
      </div>
    </div>
  )
}

// export default homeProductCard
export {HomeProductCard}