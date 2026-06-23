import './App.css'
import Example from "./Components/ReactLifeCycle";
import Parent from './Components/Memo';
import MyRef from './Components/Ref';
import ErrorBoundary from './Error_Message/ErrorBoundary'
import BuggyComp from './Error_Message/BuggyComp';

function App() {

  return (
    <>
      <Example color="Yellow"/>
      <Parent/>
      <MyRef/>
      <ErrorBoundary>
        <BuggyComp/>
      </ErrorBoundary>
    </>
  )
}

export default App