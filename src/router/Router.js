import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';

const Router = () => {
  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
  ])  
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;