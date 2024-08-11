import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import { useRef, useState } from 'react'
import SERVER from '../../utils/API';
import { toastOptions } from '../../utils/toastOptions';
import { toast } from 'react-toastify';


const Register = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleChange = (e) => {
      e.preventDefault()
      setUser({...user, [e.target.name]: e.target.value});

      if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
        passwordRef.current.setCustomValidity('');
        confirmPasswordRef.current.setCustomValidity('');
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, password, confirmPassword } = user
    if (password !== confirmPassword) {
      confirmPasswordRef.current.setCustomValidity('Passwords do not match');
      confirmPasswordRef.current.reportValidity(); 
      return;
    }

    try {
      const res = await SERVER.post('auth/register', {
        username,
        email,
        password
      })
      if(res.data){
        toast.success('Registration successful!', { toastOptions })
        navigate('/login');
        return;
      }
    } catch (error) {
      toast.error('Failed to register', { toastOptions })
    }
  }


  return (
    <div className='login'>
    <div className="loginWrap">
      <div className="loginLeft">
          <h3 className="loginLogo">Fecebook</h3>
          <span className="loginDesc">Connect with friends and the world around you with Fecebook</span>
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
              ref={passwordRef}
              />

              <input 
              type="password" 
              name='confirmPassword' 
              value={user.confirmPassword}
              className="loginInput" 
              placeholder='Confirm Password' 
              onChange={handleChange}
              // pattern={user.password}
              required
              ref={confirmPasswordRef}
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
