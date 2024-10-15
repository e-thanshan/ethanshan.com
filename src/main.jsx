import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Error404 from './Error404.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error404 />,
        children: [
          { path: '', element: <App /> },
          { path: 'about', element: <About /> },
          { path: 'projects', element: <Projects /> },
          { path: 'contact', element: <Contact /> },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
