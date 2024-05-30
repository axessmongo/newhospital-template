import React from 'react'
import Header from './Header'
import Herobanner from './Herobanner'
import Featured from './Featured'
import About from './About'
import Features from './Features'
import Service from './Service'

function Home() {
  return (
    <div>
        <Header/>
        <Herobanner/>
        <Featured/>
        <About/>
        <Features/>
        <Service/>
    </div>
  )
}

export default Home