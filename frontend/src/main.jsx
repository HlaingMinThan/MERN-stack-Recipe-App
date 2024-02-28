import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import RecipeForm from './pages/RecipeForm.jsx';
import SignUpForm from './pages/SignUpForm.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", //http://localhost:5173/
        element: <Home />
      },
      {
        path: "/about", //http://localhost:5173/about
        element: <About />
      },
      {
        path: "/contact", //http://localhost:5173/contact
        element: <Contact />
      },
      {
        path: "/recipes/create", //http://localhost:5173/recipes/create
        element: <RecipeForm />
      },
      {
        path: "/recipes/edit/:id", //http://localhost:5173/recipes/edit/id
        element: <RecipeForm />
      },
      {
        path: "/sign-up", //http://localhost:5173/sign-up
        element: <SignUpForm />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
