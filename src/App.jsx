import React from 'react'
import Accordian from './components/accordian'
import RamdomColor from './components/random-color/randomColor'
import Star from './components/star-rating/star'
import Image from './components/image-slider/image'
import LoadMoreData from './components/load-more-data/load'


const App = () => {
  return (
    <>
      {/* 
      <RamdomColor />
      <Star />
      <Accordian / 
      */}

      {/* <Image
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      <LoadMoreData />

    </>
  )
}

export default App
