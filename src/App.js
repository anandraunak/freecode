import React from 'react'
import Home from './Pages/Home'
import CoursePage from './Pages/CoursePage'
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Login from './Pages/Login'

function App() {
  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="/course-page" element={<CoursePage />} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App