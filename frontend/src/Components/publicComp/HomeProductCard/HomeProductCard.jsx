import React from 'react'
import './HomeProductCard.css'

function HomeProductCard(product) {
  const { image, name, color, price } = product.product;
  console.log(product)
  return (
    <div className='p-1 card'>
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