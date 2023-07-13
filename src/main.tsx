import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { DarkModeContextProvider } from './contexts/DarkMode.tsx'
import { ListContextProvider } from './contexts/List.tsx'
import { InvoicesModalContextProvider } from './contexts/invoiceModal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ListContextProvider>
        <InvoicesModalContextProvider>
    <App />
    </InvoicesModalContextProvider>
    </ListContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
