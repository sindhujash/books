import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slambook from './Slambook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Slambook />
  </StrictMode>,
)
