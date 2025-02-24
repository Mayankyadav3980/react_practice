import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Us from './components/Us'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar />,
        children: [
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/us", element: <Us /> },
        ],
      },
    ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App