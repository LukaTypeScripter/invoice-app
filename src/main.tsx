import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { DarkModeContextProvider } from './contexts/DarkMode.tsx'
import { ListContextProvider } from './contexts/List.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ListContextProvider>
    <App />
    </ListContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
