import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import { useDispatch } from 'react-redux';
import Encrypt from '../../components/EncryptDecrypt/Encrypt';

const Login = () => {
  // validation States
  const [passType, setPassType] = useState('password')
  const [emailCheck, setEmailCheck] = useState('Enter your email');
  const [passCheck, setPassCheck] = useState('Enter your password');

  // Data State
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPassword] = useState('');

  // const dispatch = useDispatch();
  // const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const password = Encrypt(userPass, userPass);
    const userObj = { userEmail, password };
    console.log(userObj);
    // dispatch(FunctionAddUser(userObj));
    // navigate('/login');
  }
  const onInputChange = (ip, type) => {
    // Validate uppercase letters
    var upperCaseLetters = /[A-Z]/g;

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;

    // Validate numbers
    var numbers = /[0-9]/g;

    // Validate special characters
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;

    if (type === 'email') {
      const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (patt.test(ip)) {
        setEmailCheck('Enter your email');
      } else {
        setEmailCheck('Invalid email');
      }
      setUserEmail(ip);
    } else if (type === 'password') {
      if (!(ip.match(upperCaseLetters))) {
        setPassCheck('Password should have at least one uppercase letter');
      } else if (!(ip.match(lowerCaseLetters))) {
        setPassCheck('Password should have at least one lowercase letter');
      } else if (!(ip.match(numbers))) {
        setPassCheck('Password should have at least one number');
      } else if (!(ip.match(specialCharacters))) {
        setPassCheck('Password should have at least one special character');
      } else if (!(ip.length >= 8)) {
        setPassCheck('Password should be at least 8 characters long');
      } else {
        setPassCheck('Enter your password');
      }
      setUserPassword(ip);
    } else {
      console.log('no ip');
    }

  }

  const handleShowPass = () => {
    if (passType === 'password') {
      setPassType('text');
    } else {
      setPassType('password');
    }
  }

  return (
    <div className='signup-body'>
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h2 className='auth-heading'>Login</h2>

          <div className="input-field">
            <input type="text" required onChange={(e) => onInputChange(e.target.value, 'email')} value={userEmail} />
            {(emailCheck.length > 15) ? <span style={{ color: 'white' }}>{emailCheck}</span> : <span style={{ color: '#ff7f7f' }}>{emailCheck}</span>}
          </div>
          <div className="input-field">
            <input type={passType} required onChange={(e) => onInputChange(e.target.value, 'password')} value={userPass} />
            {(passCheck.length < 21) ? <span style={{ color: 'white' }}>{passCheck}</span> : <span style={{ color: '#ff7f7f' }}>{passCheck}</span>}
          </div>
          <div className="showpass">
            <span>
              <input type="checkbox" id="remember" onClick={handleShowPass} />
              <p className='auth-para'>Show password</p>
            </span>
            <Link to="/forgotpass">Forgot password?</Link>
          </div>
          {((emailCheck.length > 15) && (passCheck.length < 21)) ? <button type="submit" >Log In</button> : <button type="submit" className='disabled-btn' disabled>Log In</button>}



          <div className="register">
            <p>Don't have an account? <Link to="/signup"><strong>Sign Up</strong></Link></p>
          </div>
        </form>
      </div>
      <div className=" overlay-container">

      </div>
    </div>
  )
}

export default Login;