
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataContext from './context/DataContext.jsx'
import RegDataContext from './context/RegDataContext.jsx'

createRoot(document.getElementById('root')).render(
    <DataContext>
        <RegDataContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RegDataContext>
    </DataContext>
)
