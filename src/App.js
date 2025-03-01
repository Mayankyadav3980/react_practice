import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
const About = lazy(() => import("./components/About"));
const Posts = lazy(() => import("./components/Us"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/us", element: <Posts /> },
      ],
      errorElement: <div>wrong route</div>,
    },
  ]);
  return (
   
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
  );
};

export default App;
