import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Franchise from './components/pages/Franchise'
import Page404 from './components/Page404'

function App() {


  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
