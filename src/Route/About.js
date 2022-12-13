
import React from 'react'
import NavBar from "../Component/NavBar"
import Footer from "../Component/Footer"
import HeroImg2 from '../Component/HeroImg2'
import AboutContent from '../Component/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT." text="I'm a friendly Java Developer. " />
      <div>
      </div>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About