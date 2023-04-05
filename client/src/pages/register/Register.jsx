import './register.css'

const Register = () => {
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
              <input type="password" className="loginInput" placeholder='Confirm Password'/>

              <button className='loginBtn' type='submit'>Sign Up</button>
              <span className="loginText">Already Registered?</span>
              <button className='rBtn'>Login</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Register
