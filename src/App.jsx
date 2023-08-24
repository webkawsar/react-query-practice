import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import RQHeroes from './components/RQHeroes';
import SuperHeroes from './components/SuperHeroes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/superheroes",
    element: <SuperHeroes />,
  },
  {
    path: "/rqheroes",
    element: <RQHeroes />,
  }
]);


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App