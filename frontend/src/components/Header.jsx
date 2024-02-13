import {} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import {FaR, FaC, FaT, FaGears, FaSliders} from 'react-icons/fa6'
import {FaLaptop, FaTv,FaAlignJustify,FaAngleRight, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.auth)

  const onLogout = () =>{
    navigate('/')
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <>
        {user ? (<header>
        <div className='logo'>
            <Link to='/'><FaR/><FaC/><FaT/></Link>
          <FaAlignJustify />
        </div>
        <div className="nav">
          <h3>MENU</h3>
          {user.admin? (
            <ul className="admin">
               <li> <Link to='/register'><FaUser className='icon'/>Register User</Link> 
                   <Link to='/register'><FaAngleRight/></Link>
              </li>
            </ul>
          ) : navigate('/computers')}
          <ul className='menu'>
              <li> <Link to='/computers'><FaLaptop className='icon'/>Computers</Link> 
                   <Link to='/computers'><FaAngleRight/></Link>
              </li>
              <li><Link to='/monitors'><FaTv className='icon'/> Monitors</Link> 
                  <Link to='/monitors'><FaAngleRight/></Link> 
              </li>
              <li><Link to='/parts'><FaGears className='icon'/>Parts</Link>
                  <Link to='/parts'><FaAngleRight/></Link>
              </li>
              <li><Link to='/others'><FaSliders className='icon'/>Others</Link>
                  <Link to='/others'><FaAngleRight/></Link>
              </li>
              <li><button className='btn' onClick={onLogout}><FaSignOutAlt className='icon'/>Logout</button>
                  <Link to=''><FaAngleRight/></Link>
              </li>
          </ul>
        </div>
    </header>): (<></>)}
    </>
  )
}

export default Header