import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import { Title } from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonialse from './components/Testimonialse/Testimonialse'
import Contact from './components/Contact/Contact'
import Footer from './components/Fotter/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/ >
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonialse' title='What Students Says'/>
        <Testimonialse/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer setPlayState ={setPlayState} playState ={playState}/>
    </div>
  )
}

export default App