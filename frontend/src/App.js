import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Computers from './pages/Computers'
import Login from './pages/Login'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/computers' element={<Computers/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
