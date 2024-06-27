import React from 'react'
import Header from './Header'
import Herobanner from './Herobanner'
import Featured from './Featured'
import About from './About'
import Features from './Features'
import Service from './Service'
import Departments from './Departments'
import Testimonials from './Testimonials'
import Docter from './Docter'
import Pricing from './Pricing'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'
// import Gallery from './Gallery'

function Home() {
  return (
    <div>
        <Header/>
        <Herobanner/>
        <Featured/>
        <About/>
        <Features/>
        <Service/>
        <Departments/>
        {/* <Testimonials/> */}
        <Docter/>
        {/* <Gallery/> */}
        <Faq/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home