import React from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Services from './Services.jsx'
import Partners from './Partners.jsx'
import About from './About.jsx'
import Testimonial from './Testimonial.jsx'
import MyFooter from './MyFooter.jsx'
import Soumik from './Soumik.jsx'

const Main = () => {
  return (
    <>
    <Navbar/>
      <Home/>
      <Partners/>
      <Services/>
      <About/>
      <Testimonial/>
      <Soumik/>
      <MyFooter/>
    </>
  )
}

export default Main