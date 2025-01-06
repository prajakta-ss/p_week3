import React from 'react'
import Navbar from '../components/navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
function Contacts() {

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts