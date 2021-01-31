import React from 'react'
import Carousel from '../../components/Carousel/Carousel.js'
import ExpertiseCarousel from './ExpertiseCarousel'
import './Landing.css'


function Expertise() {
  return (
    <div className="border">
      <div className="text-center">
        <div className="expertise--header"> OUR EXPERTISE</div>
      </div>
      <div>
        <ExpertiseCarousel />
      </div>
    </div>
  )
}

export default Expertise
