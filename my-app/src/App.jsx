import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactCard from "./components/ReuseComp"
import StudentInfo from './components/StudentInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactCard  name="Shamim" des="I am so delightful" />
      <ContactCard  name="Bristy" des="She is so delightful" />
      <StudentInfo/>
    </>
  )
}

export default App