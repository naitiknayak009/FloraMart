// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import HeroSection from './assets/components/HeroSection'
import SearchComponent from './assets/components/SearchComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessInfo from './assets/components/BusinessInfo'
import BookAppointment from './assets/components/BookAppointment'
import Footer from './assets/components/Footer'

import './App.css'

function App() {


  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BusinessInfo/>
      <SearchComponent/>
      <BookAppointment/>
      <Footer/>
      
      

    </>
  )
}

export default App
