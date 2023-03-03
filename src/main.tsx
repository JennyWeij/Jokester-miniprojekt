import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import GeneralJokesPage from './GeneralJokesPage'
import JokePage from './JokePage'
import MenuPage from './MenuPage'
import StartPage from './StartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>
      <Route index element={<StartPage/>} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="/joke" element={<JokePage />} />
      <Route path="/generaljoke" element={<GeneralJokesPage />} />
      <Route path="*" element={<h2> 404 page not found</h2>} />      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
