import React from 'react'

import './paintings.css'

import {images} from '../../constants'

const Pantings = () => {
  return (
    <div className='paintings-wrapper'>
        <div className='parallax-content'>
            <img src={images.vangogh} alt="vangogh" className='vangogh' />
            <img src={images.mountain} alt="mountain" className='mountain' />
            <img src={images.city} alt="city" className='city' />
        </div>
          <div className='parallax-main'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro a nihil sunt quasi nesciunt dicta dignissimos ab, reiciendis magnam dolorem laboriosam, vero atque recusandae veritatis, quae vel. Possimus, et?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro a nihil sunt quasi nesciunt dicta dignissimos ab, reiciendis magnam dolorem laboriosam, vero atque recusandae veritatis, quae vel. Possimus, et?</p>
          </div>
    </div>
  )
}

export default Pantings