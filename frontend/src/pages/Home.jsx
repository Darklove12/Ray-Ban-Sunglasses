import React from 'react'
import Slider from '../components/Slider'
import Ray from '../components/Ray'
import Header from '../components/Header'
import MultiCard from '../components/MultiCard'
import MultiSell from '../components/MultiSell'
import View from '../components/View'

const Home = () => {
  return (
    <div>

      <Header />
      <Slider/>
      <MultiCard/>
      <MultiSell/>
      <View/>
      <Ray/>
      
    </div>
  )
}

export default Home;