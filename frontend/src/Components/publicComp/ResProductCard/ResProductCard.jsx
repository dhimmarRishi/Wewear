import React from 'react'
import './ResProductCard.css'

function ResProductCard({product , onClick}) {
    const { image, name, color, price } = product;
    return (
        <div className='p-1 res-card' onClick={onClick}>
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