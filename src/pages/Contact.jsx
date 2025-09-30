import React from 'react'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

const Contact = () => {
  const data = useSelector((state)=>state)
  return (
    <>
    <Banner title = "Contact"/>
    {/* <h1>counter-{data.counter}</h1> */}
    <ContactUs/>
    <Footer/>
    </>
    
  )
}

export default Contact