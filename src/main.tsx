import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import JokePage from './JokePage'
import MenuPage from './MenuPage'
import StartPage from './StartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App />}>
      <Route index element={<StartPage/>} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="/joke" element={<JokePage />} />
      {/* <Route path="/programmingjokespage" element={<ProgrammingJokesPage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
