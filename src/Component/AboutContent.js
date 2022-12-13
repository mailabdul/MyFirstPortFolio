import "./AboutStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/react1.webp"
import java1 from "../assets/java1.jpg"
import img2 from "../assets/mypic2.png"


const AboutContent = () => {
  return (
    <div className="about">
        <div>
            <img src={img2} alt="mypic" className="img2"/>
        </div>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Java Developer.I create responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={java1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent