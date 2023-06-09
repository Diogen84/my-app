import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Reservations from './pages/Reservations';
import Homepage from './pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout';
import ConfirmedBooking from './pages/ConfirmedBooking';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/confirmedBooking",
        element: <ConfirmedBooking />,
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
