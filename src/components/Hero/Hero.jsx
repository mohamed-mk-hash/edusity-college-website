import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1> Nous garantissons une meilleure éducation pour un 
          monde meilleur</h1>
        <p>Notre programme d'études de pointe est conçu pour donner aux étudiants 
          les connaissances, les compétences et les expérience nécessaires pour 
           exceller dans le domaine dynamique de l'éducation</p>
         <button className='btn'>Explore More <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero