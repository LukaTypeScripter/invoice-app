import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { DarkModeContextProvider } from './contexts/DarkMode.tsx'

import { InvoicesModalContextProvider } from './contexts/invoiceModal.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(



  <React.StrictMode>
    <DarkModeContextProvider>
        <InvoicesModalContextProvider>
    <App />
    </InvoicesModalContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,

)
