import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'

export default function Dashboard() {
  return (
    <div>
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path='/About' element={<AboutPage/>} exact/>
        <Route path='/contact' element={<ContactPage/>} exact/>
      </Routes>
    </div>
  )
}
