import React from 'react'
import Carousel from './DetailsContent/Carousel'
import DetailsContent from './DetailsContent'
import Header from './Header'
import FoodSelection from './FoodSelection'
import Digital from '../Homepage/Digital'

const DetailsPage = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <DetailsContent />
        <FoodSelection />
        <Digital />
    </div>
  )
}

export default DetailsPage