import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import PayDetails from './components/PayDetails'
import Payslip from './components/Payslip'
import { Navigate } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="MainPage" element={<MainPage />} />
          <Route path="PayDetails" element={<PayDetails />} />
          <Route path="Payslip" element={<Payslip />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
