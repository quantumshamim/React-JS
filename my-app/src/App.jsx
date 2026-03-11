import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './intro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mycomponent/>
    </>
  )
}

export default App
