import './App.css'
import Login from './Login'
import SignIn from './SignIn'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Routes>
  <Route path='/login' element={ <Login />} />
  <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      </Router>
    </>
  )
}

export default App