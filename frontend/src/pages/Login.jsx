import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(isError){
        toast.error(message)
    }
    if(isSuccess && user){
        navigate('/computers')
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

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }
 
  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
    <section>
      <h1>
        <FaSignInAlt/> Login
      </h1>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className=""> 
        <input 
        type="email" id="name" name="email" value={email} placeholder="Email" onChange={onChange}/>
        </div>
       <div className="">
        <input 
          type="password" id="password" name="password" value={password} placeholder="Password" onChange={onChange}/>
       </div>
       <div className="">
        <button type="submit">Login</button>
       </div>
      </form>
    </section>
    </>
  )
}

export default Login