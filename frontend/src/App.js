import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Computers from './pages/Computers'
import Login from './pages/Login'
import Header from './components/Header'
import Register from './pages/Register'
import Monitors from './pages/Monitors'
import Parts from './pages/Parts'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/computers' element={<Computers/>}/>
            <Route path='/monitors' element={<Monitors/>}/>
            <Route path='/parts' element={<Parts/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
