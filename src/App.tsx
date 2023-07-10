import { useState,useContext } from 'react'

import styled from 'styled-components'
import './App.css'
import { SideNav,Invoices } from './components'
import { DarkModeContext } from './contexts'

function App() {
 const {darkMode} = useContext(DarkModeContext)

  return (
    <AppCont darkMode={darkMode}>
<SideNav />
<Invoices />
    </AppCont>
  )
}


const AppCont = styled.div<{darkMode:boolean}>`
  background-color: ${props => props.darkMode ? "#141625" : "#f2f2f2"};
  display: flex;
  gap: 36px;
  height: auto;
  min-height: 100vh;
  position: relative;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap:0;
  }

`


export default App
