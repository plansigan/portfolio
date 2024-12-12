import { Route, Routes, useLocation } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Experience from '../pages/Experience'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
