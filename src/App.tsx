import './styling/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'


function App() {
  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <div id="body-container">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
