import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Chai />
      <App />
    </div>
    
  </StrictMode>,
)
