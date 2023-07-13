import { useState,useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styled from 'styled-components'
import './App.css'
import { SideNav,Invoices, SpecificInvoices } from './components'
import { DarkModeContext } from './contexts'

function App() {
 const {darkMode} = useContext(DarkModeContext)

  return (
    <Router>
    <AppCont darkMode={darkMode}>
      <SideNav />
      <Routes>
        <Route   path="/" element={<Invoices/>} />
        <Route path="/invoices/:id" element={<SpecificInvoices/>} />
      </Routes>
    </AppCont>
  </Router>
    
  )
}


const AppCont = styled.div<{darkMode:boolean}>`
  background-color: ${props => props.darkMode ? "#141625" : "#f2f2f2"};
  display: flex;
  color:white!important;
  gap: 36px;
  height: auto;
  min-height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap:0;
  }

`


export default App
