import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './main/home'
import Navbar from './main/Components/navbar'
import Footer from "./main/Components/Footer";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <Footer />
  </StrictMode>,
)
