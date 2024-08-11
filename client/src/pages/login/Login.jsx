import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import SERVER from '../../utils/API'
import { AuthContext } from '../../services/authContext'
import { CircularProgress } from '@mui/material'
import { toastOptions } from '../../utils/toastOptions';
import { toast } from 'react-toastify'


const Login = () => {

  const email = useRef()
  const password = useRef()

  const { loading, dispatch, error} = useContext(AuthContext)

  const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch({type: 'LOGIN_START'})

      try {
        const res = await SERVER.post( 'auth/login', {
          email: email.current.value,
          password: password.current.value
        })

        dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
        toast.success('Login successfully!', { toastOptions })
      } catch (error) {
        dispatch({type: 'LOGIN_FAIL'});
        toast.error('Login Failed!, Please enter valid credentials', { toastOptions })
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
                  type="email" 
                  ref={email} 
                  className="loginInput" 
                  placeholder='Email'
                  required
                 
                />

                <input type="password" ref={password} className={error ? 'loginErr': 'loginInput'} placeholder='Password' required minLength={4}/>

                <button className='loginBtn' type='submit'>
                  { loading ? <CircularProgress variant='contained' sx={{ height: '15px', color:'white', margin: 'auto', display: 'flex'}}/>: "Login"}
                </button>

              {error &&  <span className="">Please enter a valid username and passord</span>}
                
                <span className="loginText">Forget Password?</span>
                <Link to='/register'>
                  <button className='rBtn' disabled={loading}>
                  Create An Account
                    </button>
                </Link>
               
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
