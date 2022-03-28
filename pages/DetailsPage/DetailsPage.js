import React from 'react'
import Carousel from './DetailsContent/Carousel'
import DetailsContent from './DetailsContent'
import Header from './Header'

const DetailsPage = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <DetailsContent />
    </div>
  )
}

export default DetailsPage