import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path: 'about'
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col min-h-screen'>
      <Navigation/>
      <App />
      <Footer/>
    </div>
  </StrictMode>
  ,
)
