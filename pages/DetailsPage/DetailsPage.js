import React from 'react'
import Carousel from './DetailsContent/Carousel'
import DetailsContent from './DetailsContent'
import Header from './Header'
import FoodSelection from './FoodSelection'
import Digital from '../Homepage/Digital'
import Contact from '../Homepage/Contact'

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <DetailsContent />
      <FoodSelection />
      <Digital />
      <Contact />
    </div>
  );
}

export default DetailsPage