import './App.css'
import Example from "./Components/ReactLifeCycle";
import Parent from './Components/Memo';
import MyRef from './Components/Ref';
import ErrorBoundary from './Error_Message/ErrorBoundary'
import BuggyComp from './Error_Message/BuggyComp';
import HigherOrderComponent from './Components/HigherOrderComponent';


function App() {

  return (
    <>
      {/* <Example color="Yellow"/>
      <Parent/>
      <MyRef/>
      <ErrorBoundary>
        <BuggyComp/>
      </ErrorBoundary> */}
      <HigherOrderComponent/>
    </>
  )
}

export default App