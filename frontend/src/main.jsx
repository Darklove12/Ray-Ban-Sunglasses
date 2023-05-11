import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}
from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Profile  from './pages/Profile';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/Register",
    element: <Register/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)