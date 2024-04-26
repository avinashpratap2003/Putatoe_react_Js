import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import SubService from './components/SubService'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className=' overflow-x-hidden m-0 p-0 bg-slate-200 mx-auto'>
      <Navbar/>
      <Hero/> 
      <ProductPage/> 
      <SubService/>
      <Footer/>
    </div>
     
    </>
  )
}

export default App
