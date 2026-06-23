import './App.css'
import Example from "./Components/ReactLifeCycle";
import Parent from './Components/Memo';

function App() {

  return (
    <>
      <Example color="Yellow"/>
      <Parent/>
    </>
  )
}

export default App