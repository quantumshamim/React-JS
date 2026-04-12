import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactCard from "./components/ReuseComp"
import StudentInfo from './components/StudentInfo'
import MyDate from './components/Date'
import MyState from './components/MyState'

function App(){
  return (
    <>
      {/* <ContactCard  name="Shamim" des="I am so delightful" />
      <ContactCard  name="Bristy" des="She is so delightful" />
      <StudentInfo/> */}
      {/* <MyDate/> */}
      <MyState/>
    </>
  )
}

export default App