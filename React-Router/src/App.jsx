import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
