import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactCard from "./components/ReuseComp"
import StudentInfo from './components/StudentInfo'
import MyDate from './components/Date'
import MyState from './components/MyState'
import StudentData from "./components/Studentdata.json"
import UniqueID from './components/UniqueID'
import NestedMapping from "./components/NestedMapping"
import MyEvent from './components/EventHandler'
import OnChange from "./components/EventHandler2"
import Parents from './components/Parent'
import Login from './components/Login/Login'

function App(){
  
  return (
    <>
      {/* <ContactCard  name="Shamim" des="I am so delightful" />
      <ContactCard  name="Bristy" des="She is so delightful" /> */}
      
      {/* <MyDate/> */}
      {/* <MyState/> */}
      
      {/* {StudentData.map(
        (data)=>(
          <StudentInfo username = {data.username} number = {data.number} address = {data.address}/>
        )
      )} */}

      {/* <UniqueID/>
      <NestedMapping/>
      <MyEvent/>
      <OnChange/>
      <Parents/> */}
      <Login/>
    </>
  )
}

export default App