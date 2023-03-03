import { Outlet } from 'react-router-dom'
import './App.css'
import "./assets/fonts/fonts.css"
import ErrorBoundary from './ErrorBoundary'


function App() {

  return (
    <div>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}

export default App
