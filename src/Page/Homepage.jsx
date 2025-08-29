import React from 'react'
import Aboutme from '../Home/Aboutme/Aboutme'
import FlashBar from '../Home/FlashBar/FlashBar'
import Aboutme2 from '../Home/Aboutme2/Aboutme2'
import Skills from '../Home/Skills/Skills'
import Service from '../Home/Service/Service'
import Projects from '../Home/Projects/Projects'
import Education from '../Home/Education/Education'
import Contact from '../Home/Contact/Contact'
import Footer from '../Home/Footer/Footer'

const Homepage = () => {
  return (
    <>
    <Aboutme/>
    <FlashBar/>
    <Skills/>
    <Service/>
    <Projects/>
    <Aboutme2/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Homepage