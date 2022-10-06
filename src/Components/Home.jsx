import React from 'react'
import PROFILE from '../images/Me.png'
import '../App.css'
import RESUME from './RESUME.pdf'

const Home = () => {
  return (
    <>
    <div className="container-fluid back-image-home">
        <div className="container" id='home'>
            <div className="row">
                <div className="col-md-6 order-2 order-md-1 homebox">
                    <h1 className='display-3'>Hi,</h1>
                    <h2 className='display-4'>I'M PRAKASH SINGH</h2>
                    <h4>WEB DEVELOPER</h4>
                    <br />
                    <p>Ambitious, career-focused tech enthusiast looking for an opportunity 
                        where my potentials will be fully discovered while working for the 
                        company dedicatedly
                    </p>
                      <a className="my-button btn btn-sm" href={RESUME}>DOWNLOAD CV</a>
                </div>
                <div className="col-md-6 order-1 order-md-2 profile">
                    <img src={PROFILE} alt="Profile" className='img-fluid'/>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home
