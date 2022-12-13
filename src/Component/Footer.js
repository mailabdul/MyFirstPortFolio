import "./Footer.css"
import React from 'react'
import { FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:
                        "#fff",marginRight:"2rem"}}/>
                </div>
                <div>
                    <p>Murshidabad,West Bengal,</p>
                    <p>India.</p>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:
                        "#fff",marginRight:"2rem"}}/>
                        +91-9002383591
                </h4>
                <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:
                        "#fff",marginRight:"2rem"}}/>
                        mailabdul95@gmail.com
                </h4>
            </div>
            </div>
            
            </div>
            
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Md Abdul Rahman Momin.I'm Software
                    Developer,I enjoy discussing new projects and 
                    design challenges.
                </p>
                    <div className="social">
                        <a href="https://www.facebook.com/Rahman1819">
                    <FaFacebook size={30} style={{color:
                        "#fff",marginRight:"1rem"}} />
                        </a>
                        <a href="https://github.com/mailabdul/MyProfile">
                        <FaGithub size={30} style={{color:
                        "#fff",marginRight:"1rem"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/md-abdul-rahman-momin-23b361167/">
                        <FaLinkedin size={30} style={{color:
                        "#fff",marginRight:"1rem"}}/>
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer