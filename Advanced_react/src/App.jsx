import './App.css'
import Example from "./Components/ReactLifeCycle";
import Parent from './Components/Memo';
import MyRef from './Components/Ref';
import ErrorBoundary from './Error_Message/ErrorBoundary'
import BuggyComp from './Error_Message/BuggyComp';
import HigherOrderComponent from './Components/HigherOrderComponent';
import ApiProvider from './Components/Context/ApiProvider';
import ThemeToggler from './Components/Context/Consumer';


function App() {

  return (
    <>
        {/* <Example color="Yellow"/>
        <Parent/>
        <MyRef/>
        <ErrorBoundary>
          <BuggyComp/>
        </ErrorBoundary> */}
        {/* <HigherOrderComponent/> */}
          <ApiProvider>
            <ThemeToggler/>
          </ApiProvider>
    </>
  )
}

export default App