import { useState, useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { FaUser } from "react-icons/fa"
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    technician: '',
    station: '',
    admin: false,
    password: '',
    password2: '',
  })

  const {technician, station, email, password, password2, admin} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(isError){
        toast.error(message)
    }
    if(isSuccess || user){
        navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()

    if(password !== password2){
        toast.error('Passwords do not match')
    }else{
        const userData = {
            technician,
            station,
            email,
            password,
            admin
        }

        dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner/>
  }
 
  return (
    <>
    <section>
      <h1>
        <FaUser/> Register
      </h1>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
      <div className=""> 
        <input 
        type="text" id="technician" name="technician" value={technician} placeholder="Technician" onChange={onChange}/>
        </div>
        <div className=""> 
        <input 
        type="text" id="station" name="station" value={station} placeholder="Station" onChange={onChange}/>
        </div>
        <div className=""> 
        <input 
        type="email" id="email" name="email" value={email} placeholder="Email" onChange={onChange}/>
        </div>
       <div className="">
        <input 
          type="password" id="password" name="password" value={password} placeholder="Password" onChange={onChange}/>
       </div>
       <div className="">
        <input 
          type="password" id="password2" name="password2" value={password2} placeholder="Confirm Password" onChange={onChange}/>
       </div>
       <div className="">
        <p>Admin Y/N</p>
        <input 
          type="radio" id="admin" name="admin" value={admin} onChange={onChange}/>
       </div>
       <div className="">
        <button type="submit">Register</button>
       </div>
      </form>
    </section>
    </>
  )
}

export default Register