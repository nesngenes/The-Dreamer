import React from 'react'
import Pantings from './components/Paintings/Pantings'
import './app.css'
import Landing from './components/Landing/Landing'
import Story from './components/Story/Story'

const App = () => {
  return (
    <div>
        <Landing />
        <Story />
        <Pantings />
    </div>
  )
}

export default App