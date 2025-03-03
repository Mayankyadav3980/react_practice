import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Us from "./components/Us";
import Navbar from "./components/Navbar";

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/", element: <Navbar/>, children:[
        {index:true, element: <Home/>},
        {path:"/about", element: <About/>},
        {path:"/us", element: <Us/>},
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App