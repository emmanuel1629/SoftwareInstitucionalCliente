import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { AutenticacionProvider } from './contexto/ContextoAutenticacion';
import { BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutenticacionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AutenticacionProvider>
  </React.StrictMode>,
)
