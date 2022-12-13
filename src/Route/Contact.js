import React from 'react'
import NavBar from "../Component/NavBar"
import Footer from "../Component/Footer"
import HeroImg2 from '../Component/HeroImg2'
import Form from "../Component/Form.js"

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat " />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact