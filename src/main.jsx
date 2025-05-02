import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Routess from './routes/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routess />
    </BrowserRouter>
  </StrictMode>,
)
