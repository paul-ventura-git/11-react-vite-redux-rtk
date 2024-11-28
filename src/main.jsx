import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokeApp } from './PokeApp.jsx'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <PokeApp />
    </Provider>
  </StrictMode>,
)
