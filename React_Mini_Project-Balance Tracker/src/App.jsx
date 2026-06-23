import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpences from './Components/IncomeExpences'
import AddTransaction from './Components/AddTransaction'
import TransactionList from './Components/TransactionList'


function App() {
   useState([])
  return (
    <>
      <Header/>
      <Balance/>
      <IncomeExpences/>
      <AddTransaction/>
      <TransactionList/>
    </>
  )
}

export default App
