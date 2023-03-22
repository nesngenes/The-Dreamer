import React, { useState, useRef, useCallback } from 'react'

import './landing.css'

import {images} from '../../constants'

const Landing = () => {

  const moon = useRef(null);
  const info = useRef(null);
  const mainHeading = useRef(null);

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
  })
  
  const handleMouseMove = ((e) => {
    setMousePosition({
      left: e.pageX, 
      top: e.pageY * 0.8
    });
  })

  return (
    <div className='landing-page' onMouseMove={(e)=> handleMouseMove(e)}>
      <h1 ref={mainHeading}>The Dreamer</h1>
      <img src={images.moon} alt="moon" className='moon' ref={moon}
        style={{left:MousePosition.left, top: MousePosition.top * 0.2}}
      />
      <div className='little-info' ref={info}
        style={{left:MousePosition.left, top:MousePosition.top}}
      >
        <p>This is just a random website for practicing CSS <br /> 
        also random talk about myself because i don't have any concept in mind for now lol 
        </p>
      </div>
    </div>
  )
}

export default Landing