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
            <p className='paper-1'>I guess i’m a visioner type of person <br /> hmm maybe ? but i just dream a lot. </p>
            <p className='paper-2'>Like a lot .......... (is it bad ? T_T)</p>
            <p className='keep-scrolling'>KEEP SCROLLING !</p>
        </div>
          <div className='parallax-main'>
            <p>I always try to make a fun way to do my work or tasks <br /> so that i could do these things with all my heart xD</p>
            <p>I often use my own fantasy or imagination to make such a heavy or boring tasks become more fun and exciting :)</p>
            <p>For example when i feel too lazy to clean my dishes, i imagine myself as a badass chef like Vinsmoke Sanji from One Piece xD 
      <br /> Sanji is one of my favorite anime character, he’s a really great and handsome chef. 
      
      <br /> I’ve seen him cleaning dishes very handsomely 

      <br /> After that i got excited to clean my dishes and
      feeling like a badass chefs LOL 

      IKR i’m probably stupid </p>
          </div>
    </div>
  )
}

export default Pantings