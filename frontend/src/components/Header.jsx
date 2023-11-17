import {} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {FaR, FaC, FaT, FaGears, FaSliders} from 'react-icons/fa6'
import {FaLaptop, FaTv,FaAlignJustify,FaAngleRight, FaSignOutAlt  } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <Link to='/'><FaR/><FaC/><FaT/></Link>
          <FaAlignJustify />
        </div>
        <div className="nav">
          <h3>MENU</h3>
          <ul className='menu'>
              <li> <Link to='/computers'><FaLaptop className='icon'/>Computers</Link> <FaAngleRight/></li>
              <li><Link to='/monitors'><FaTv className='icon'/> Monitors</Link> <FaAngleRight/></li>
              <li><Link to='/parts'><FaGears className='icon'/>Parts</Link><FaAngleRight/></li>
              <li><Link to='/others'><FaSliders className='icon'/>Others</Link><FaAngleRight/></li>
              <li><Link to=''><FaSignOutAlt className='icon'/>Logout</Link><FaAngleRight/></li>
          </ul>
        </div>
    </header>
  )
}

export default Header