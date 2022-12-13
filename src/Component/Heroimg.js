import "./ImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import resume from "../assets/MyResume.pdf"
import {Link} from "react-router-dom"
import myimg from "../assets/mypic.jpg"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'm Md Abdul Rahman Momin</p>
            <h1>Full Stack Developer</h1>
            <div>
                <a href={resume} className="btn" download>RESUME</a>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
            <div>
              <img src={myimg} alt="this is pic" className = "img"/>
            </div>
        </div>
    </div>
  )
}

export default Heroimg