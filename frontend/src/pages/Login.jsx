import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()
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
        type="email" id="name" email="email" value={email} placeholder="Email" onChange={onChange}/>
        </div>
       <div className="">
        <input 
          type="password" id="password" password="password" value={password} placeholder="Password" onChange={onChange}/>
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