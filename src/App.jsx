import React from 'react'
import Accordian from './components/accordian'
import RamdomColor from './components/random-color/randomColor'
import Star from './components/star-rating/star'

const App = () => {
  return (
    <>
      <RamdomColor />
      <Star noOfStars={10}/>
      <Accordian />

    </>
  )
}

export default App
