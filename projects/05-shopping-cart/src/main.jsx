import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filtres.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
