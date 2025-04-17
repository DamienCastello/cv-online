import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Portfolio from './pages/Portfolio'
import './styles/responsive.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  )
}

export default App
