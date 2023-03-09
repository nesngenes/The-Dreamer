import React from 'react'
import Pantings from './components/Paintings/Pantings'
import './app.css'
import Landing from './components/Landing/Landing'

const App = () => {
  return (
    <div>
        <Landing />
        <Pantings />  
        <div className='dumy'>
          blabla
        </div>
    </div>
  )
}

export default App