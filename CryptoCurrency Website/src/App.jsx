import './App.css'
import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Map from './components/Map'

const App = () => (
  <div className="container bg-brand mx-auto ">
    <Navbar />
    <Banner />
    <About />
    <Features />
    <Map />
    <Footer />
  </div>
)

export default App
