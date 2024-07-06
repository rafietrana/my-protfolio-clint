import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import ProjectsDetails from './Component/ProjectsDetails/ProjectsDetails';
import AboutMe from './Component/AboutMe/AboutMe';
import Contact from './Component/Contact/Contact';
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/projects/:id',
        element: <ProjectsDetails></ProjectsDetails>
      },
      {
       path: '/aboutme',
       element: <AboutMe></AboutMe>
      },
      {
       path: '/contact',
       element: <Contact></Contact>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
