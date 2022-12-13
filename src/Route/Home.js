import React from 'react'
import NavBar from "../Component/NavBar"
import Heroimg from "../Component/Heroimg"
import Footer from "../Component/Footer"
import Work from "../Component/Work.js"

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home