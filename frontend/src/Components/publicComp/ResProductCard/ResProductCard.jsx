import React from 'react'
import './ResProductCard.css'

function ResProductCard(product) {
    const { image, name, color, price } = product.product;
    return (
        <div className='p-1 res-card'>
            <div className='res-img-cover'>
                <img src={image} alt="Slipper Image" />
            </div>
            <div className='res-img-info '>
                <p className='title '>{name}</p>
                <p className=' thin'>{color}</p>
                <p className=' thin'>Rs. {price}</p>
            </div>
        </div>
    )
}

export  {ResProductCard}