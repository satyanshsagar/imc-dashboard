import React from 'react'
import Header from '../../components/Headers/Header.js'
import Navbars from '../../components/Navbar/Navbar.js'
import Carousel from '../../components/Carousel/Carousel.js'
import Ministers from './Ministers'
import Expertise from './Expertise'
import Services from './Services'
import ImportantLinks from './ImportantLinks'
import Footer from './Footer'
import './Landing.css'

function Landing() {
  return (
    <div className="landing--page container-fluid">
      <Header />
      <Navbars />
      <Carousel />
      <br/><br/>
      <Ministers />
      <br/><br/>
      <Expertise />
      <br/><br/>
      <Services />
      <br/><br/>
      <ImportantLinks />
      <br/><br/>
      <Footer />
    </div>
  )
}

export default Landing
