import './App.css'
import Example from "./Components/ReactLifeCycle";
import Parent from './Components/Memo';
import MyRef from './Components/Ref';

function App() {

  return (
    <>
      <Example color="Yellow"/>
      <Parent/>
      <MyRef/>
    </>
  )
}

export default App