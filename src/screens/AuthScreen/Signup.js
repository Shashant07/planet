import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';

import Encrypt from '../../components/EncryptDecrypt/Encrypt';
import { FunctionAddUser } from '../../redux/actions/userAction';


const Signup = () => {

    // validation States
    const [passType, setPassType] = useState('password')
    const [nameCheck, setNameCheck] = useState('Enter your name');
    const [emailCheck, setEmailCheck] = useState('Enter your email');
    const [passCheck, setPassCheck] = useState('Enter your password');
    const [confPassCheck, setconfPassCheck] = useState('Confirm password');
    const [mobnoCheck, setmobnoCheck] = useState('Enter your phone number');
    // Data State
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userDOB, setUserDOB] = useState('');
    const [userRole] = useState('subscriber');
    const [userPass, setUserPassword] = useState('');
    const [confPass, setConfPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = Encrypt(userPass, userPass);
        const userObj = { userName, userEmail, userPhone, userDOB, userRole, password};
        // console.log(userObj);
        dispatch(FunctionAddUser(userObj));
        setUserName('');
        setUserEmail('');
        setUserPhone('');
        setUserDOB('');
        setUserPassword('')
        setConfPassword('');
        navigate('/login');
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

        if (type === 'name') {
            if (ip.length < 3) {
                setNameCheck('Name should be at least 3 characters long');
            } else {
                setNameCheck('Enter your name');
            }
            setUserName(ip);
        } else if (type === 'email') {
            const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (patt.test(ip)) {
                setEmailCheck('Enter your email');
            } else {
                setEmailCheck('Invalid email');
            }
            setUserEmail(ip);
        } else if (type === 'phone') {
            const patt = /^\d{10}$/;
            if (patt.test(ip)) {
                setmobnoCheck('Enter your phone number');
            } else {
                setmobnoCheck('Invalid phone number');
            }
            setUserPhone(ip);
            
        } else if(type === 'dob'){
            setUserDOB(ip);
        }else if (type === 'password') {
            if (!(ip.match(upperCaseLetters))) {
                setPassCheck('Password should have at least one uppercase letter');
            } else if(!(ip.match(lowerCaseLetters))){
                setPassCheck('Password should have at least one lowercase letter');
            } else if(!(ip.match(numbers))){
                setPassCheck('Password should have at least one number');
            } else if (!(ip.match(specialCharacters))) {
                setPassCheck('Password should have at least one special character');
            }else if (!(ip.length >= 8)) {
                setPassCheck('Password should be at least 8 characters long');
            }else {
                setPassCheck('Enter your password');
            }
            setUserPassword(ip);
        } else if (type === 'confPsass') {
            if (!(ip.match(upperCaseLetters))) {
                setconfPassCheck('Password should have at least one uppercase letter');
            } else if(!(ip.match(lowerCaseLetters))){
                setconfPassCheck('Password should have at least one lowercase letter');
            } else if(!(ip.match(numbers))){
                setconfPassCheck('Password should have at least one number');
            } else if (!(ip.match(specialCharacters))) {
                setconfPassCheck('Password should have at least one special character');
            }else if (!(ip.length >= 8)) {
                setconfPassCheck('Password should be at least 8 characters long');
            }else if(userPass !== ip){
                setconfPassCheck('Password and confirm password should be same');
            }else {
                setconfPassCheck('Confirm password');
            }
            setConfPassword(ip);
        }else {
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
                <form onSubmit={handleSubmit}>
                    <h2 className='auth-heading'>Sign Up</h2>
                    <div className="input-field">
                        <input type="text" required onChange={(e) => onInputChange(e.target.value, 'name')} value={userName}/>
                        {(nameCheck.length < 16) ? <span style={{ color: 'white' }}>{nameCheck}</span> : <span style={{ color: '#ff7f7f' }}>{nameCheck}</span>}

                    </div>
                    <div className="input-field">
                        <input type="text" required onChange={(e) => onInputChange(e.target.value, 'email')} value={userEmail}/>
                        {(emailCheck.length > 15) ? <span style={{ color: 'white' }}>{emailCheck}</span> : <span style={{ color: '#ff7f7f' }}>{emailCheck}</span>}
                    </div>
                    <div className="input-field">
                        <input type="number" required onChange={(e) => onInputChange(e.target.value, 'phone')} value={userPhone}/>
                        {(mobnoCheck.length > 21) ? <span style={{ color: 'white' }}>{mobnoCheck}</span> : <span style={{ color: '#ff7f7f' }}>{mobnoCheck}</span>}
                    </div>
                    <div className="input-field">
                        <input type="date" required onChange={(e) => onInputChange(e.target.value, 'dob')} value={userDOB}/>
                        <p>Enter your Date of Birth</p>
                    </div>
                    <div className="input-field">
                        <input type={passType} required onChange={(e) => onInputChange(e.target.value, 'password')} value={userPass}/>
                        {(passCheck.length < 21) ? <span style={{ color: 'white' }}>{passCheck}</span> : <span style={{ color: '#ff7f7f' }}>{passCheck}</span>}
                    </div>
                    <div className="input-field">
                        <input type={passType} required onChange={(e) => onInputChange(e.target.value, 'confPsass')} value={confPass}/>
                        {(confPassCheck.length < 21) ? <span style={{ color: 'white' }}>{confPassCheck}</span> : <span style={{ color: '#ff7f7f' }}>{confPassCheck}</span>}
                    </div>
                    <div className="showpass">
                        <span>
                            <input type="checkbox" id="remember" onClick={handleShowPass} />
                            <p className='auth-para'>Show password</p>
                        </span>
                    </div>
                    {((nameCheck.length < 16) && (emailCheck.length > 15) && (mobnoCheck.length > 21) && (passCheck.length < 21) && (confPassCheck.length < 21)) ? <button type="submit" >Sign Up</button> : <button type="submit" className='disabled-btn' disabled>Sign Up</button>}
                    <div className="register">
                        <p>Have an account <Link to="/login"><strong>Login</strong></Link></p>
                    </div>
                </form>
            </div>
            <div className=" overlay-container">
            </div>
        </div>
    )
}

export default Signup;