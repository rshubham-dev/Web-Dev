import React from 'react'
import "./index.css";
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/components.css';
import './style/responsive-components.css'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import DesignServices from './pages/DesignServices'
import ConstructionServices from './pages/ConstructionServices'
import Layout from './pages/Layout';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/design' element={<DesignServices />} />
          <Route path='/service/construction' element={<ConstructionServices />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App