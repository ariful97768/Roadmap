import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root';
import AuthProvider from './ContextProvider/AuthProvider';
import Home from './Pages/Home';
import FeatureDetails from './Pages/FeatureDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './ContextProvider/PrivateRoute';
import UnknownRoute from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Root /></PrivateRoute>,
    errorElement: <UnknownRoute />,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home /></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><FeatureDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://roadmap-server-woad.vercel.app/get-post/${params.id}`)
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <UnknownRoute />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
