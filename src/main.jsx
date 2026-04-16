import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ForRoute from './Component/ForRoute.jsx'
import DetailCard from './Component/DetailCard.jsx'
import Timeline from './Component/Timeline.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ForRoute />
      },
      {
        path: '/:details_friend',
        element: <DetailCard />
      },
      {
        path: '/timeline',
        element: <Timeline />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
