import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import SERVER from '../../utils/API'

const Register = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
      e.preventDefault()
      setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {username, email, password} = user
    try {
      const res = await SERVER.post('auth/register', {
        username,
        email,
        password
      })
      res.data && navigate('/')
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(user)

  return (
    <div className='login'>
    <div className="loginWrap">
      <div className="loginLeft">
          <h3 className="loginLogo">Tompolo Social</h3>
          <span className="loginDesc">Connect with friends and the world around you with Tompolo</span>
      </div>
      <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
              <input 
              type="text" 
              name='username' 
              value={user.username}
              className="loginInput" 
              placeholder='Username' 
              onChange={handleChange}
              required
              />  

              <input 
              type="email" 
              name='email' 
              value={user.email}
              className="loginInput" 
              placeholder='Email'
              onChange={handleChange}
              required
              />

              <input 
              type="password" 
              name='password' 
              value={user.password}
              className="loginInput" 
              placeholder='Password' 
              onChange={handleChange}
              min={4}
              required
              />

              <input 
              type="password" 
              name='confirmPassword' 
              value={user.confirmPassword}
              className="loginInput" 
              placeholder='Confirm Password' 
              onChange={handleChange}
              pattern={user.password}
              required
              />

              <button className='loginBtn' type='submit'>Sign Up</button>
              <span className="loginText">Already Registered?</span>
              <Link to='/login' className='link'>
                <button className='rBtn'>Login</button>
              </Link>
             
          </form>
      </div>
    </div>
  </div>
  )
}

export default Register
