import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrap">
        <div className="loginLeft">
            <h3 className="loginLogo">Tompolo Social</h3>
            <span className="loginDesc">Connect with friends and the world around you with Tompolo</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="email" className="loginInput" placeholder='Email'/>
                <input type="password" className="loginInput" placeholder='Password'/>

                <button className='loginBtn' type='submit'>Login</button>
                <span className="loginText">Forget Password?</span>
                <Link to='/register'>
                  <button className='rBtn'>Create an account</button>
                </Link>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
