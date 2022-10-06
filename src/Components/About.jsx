import React from 'react'
import PROFILE from '../images/profile-pic.png'
import '../App.css'

const About = () => {
  return (
    <>
    <div className="container-fluid back-image-about">
    <div className="container" id='about'>
      <div className="row info">
      <h1 className='display-4 text-center'>About Me</h1>
        <div className="col-md-4 about-img">
          <img src={PROFILE} alt="PROFILE PIC" className='img-fluid'/>
        </div>
        <div className="col-md-8">
          <p>
          Hello everyone,I am <strong>Prakash Singh Basnal</strong>, a web developer. My aim is to ease the website development process into an easy and more fun way to develop websites and be ready to learn new technology and upskill my knowledge. 
          </p>
          <h4 className='qualification'>Projects :</h4>
          <div className="row">
            <div className="col-6">
              <a href="https://react-js-todo.vercel.app/">TO DO List</a>
            </div>
            <div className="col-6">
            <a href="https://react-js-a3ddc.web.app/">E-Commerce Site</a>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default About