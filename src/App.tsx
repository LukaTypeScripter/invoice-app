import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components'
import './App.css'
import { SideNav,Invoices } from './components'

function App() {


  return (
    <AppCont>
<SideNav />
<Invoices />
    </AppCont>
  )
}


const AppCont = styled.div`
  background-color: #f2f2f2;
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
