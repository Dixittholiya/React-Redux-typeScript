import React, { useState } from 'react'
import { Button, Input } from 'antd'
import './Login.scss'
import { ILogin } from '../../model/mode'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import LoginUserData from '../../../redux/action/UserAction'

const Login = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState<ILogin>({
    email:"",
    password:""
  })

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setLogin({...login, [e.target.name]:e.target.value})
  }

  const submitHandler = ():void => {
    console.log("Login : ",login);
    axios.post('http://localhost:2000/users/user-login',login)
    .then(function (response) {
      console.log(response.data.find);
      dispatch(LoginUserData(response.data.find))
    })
    setLogin({email:"",password:""})
  }
  return (
    <>
    <div id="Login">
      <div className="main-div">
        <div className="child-div">
          <div className="loginForm">
            <h1 className='title'>Login Form</h1>
          <div className="email">
              <label>Enter Email Address</label>
              <Input size="large" placeholder="Enter User Name" type="text" name='email' className='emailInput' value={login.email} onChange={changeHandler}/>
            </div>

            <div className="password">
              <label>Enter password</label>
              <Input size="large" placeholder="Enter User Name" type="text" name='password' className='passwordIUnput' value={login.password} onChange={changeHandler}/>
            </div>

            <div className="submitButton">
              <Button type="primary" className='button' onClick={submitHandler}>Login</Button>
            </div>

          </div>
          <div className="img">
            <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt=""  className='image'/>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Login
