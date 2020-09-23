import React from 'react'
import '../../App.css'
import Button from '../Button/Button'
import './HeroSection.css'

const HeroSection = () => {
   return (
      <div className='hero-container'>
         <video src='/videos/video-2.mp4' autoPlay loop muted />
         <h1>Шукай собі... пригоди</h1>
         <p>Чого ти чекаєш?</p>
         <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started!</Button>
         </div>
         <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Video! <i className='far fa-play-circle' /></Button>
         </div>
      </div>
   )
}

export default HeroSection
