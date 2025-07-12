import React from 'react'
import Accordian from './components/accordian'
import RamdomColor from './components/random-color/randomColor'
import Star from './components/star-rating/star'
import Image from './components/image-slider/image'
import LoadMoreData from './components/load-more-data/load'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'

const App = () => {
  return (
    <>
     
      {/* <RamdomColor /> */} 
      {/* <Star /> */}
      {/* <Accordian /> */}
      {/* <Image url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator /> */}
      <LightDarkMode />
      



    </>
  )
}

export default App
