import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'projects',
    element: <Projects/>
  },
  {
    path: 'contact',
    element: <Contact/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  ,
)
