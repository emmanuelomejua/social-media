import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import { apiRoute } from '../../utils/API'
import { AuthContext } from '../../context/authContext'
import { CircularProgress } from '@mui/material'
import axios from 'axios'

const Login = () => {

  const email = useRef()
  const password = useRef()

  const {user, loading, dispatch} = useContext(AuthContext)

  const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch({type: 'LOGIN_START'})

      try {
        const res = await axios.post(apiRoute + 'auth/login', {
          email: email.current.value,
          password: password.current.value
        })

        dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
      } catch (error) {
        dispatch({type: 'LOGIN_FAIL'})
      }
  }



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
                  type="email" 
                  ref={email} 
                  className="loginInput" 
                  placeholder='Email'
                  required
                 
                />

                <input type="password" ref={password} className="loginInput" placeholder='Password' required minLength={4}/>

                <button className='loginBtn' type='submit' disabled={loading}>
                  { loading ? <CircularProgress style={{color: 'white', height: '10px'}}/>: "Login"}
                </button>
                
                <span className="loginText">Forget Password?</span>
                <Link to='/register'>
                  <button className='rBtn'>
                  { loading ? <CircularProgress style={{color: 'white', height: '10px'}}/>: "Create An Account"}
                    </button>
                </Link>
               
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
