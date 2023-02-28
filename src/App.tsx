import { Outlet } from 'react-router-dom'
import './App.css'
import "./assets/fonts/fonts.css"
import Header from './Header'




function App() {

  return (
    <div>
      <Header />
    <Outlet />


    </div>
  )
}

export default App
