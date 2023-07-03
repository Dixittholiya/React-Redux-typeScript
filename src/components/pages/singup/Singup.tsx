import React, { useState } from 'react'
import './Singup.scss'
import { Button, Input } from 'antd'
import { ISingup } from '../../model/mode'
import axios from 'axios'
const Singup = () => {


  const [singup, setSingup] = useState<ISingup>({
    userName: "",
    email: "",
    password: "",
    conformPassword: ""
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setSingup({ ...singup, [e.target.name]: e.target.value })
  }

  const submitHandler = (e :any):void => {
    e.preventDefault()
    console.log("Singup : ",singup);
    axios.post('http://localhost:2000/users/user!Register',singup)
    .then(function (response) {
      console.log(response);
    })
    setSingup({ userName: "",email: "",password: "",conformPassword: ""})
  }
  return (
    <>
      <div id="shingup">
        <div className="main-div">
          <div className="child-div">
            <h1 className='title'>Singup Form</h1>
            <form action="">
              <div className="userName">
                <label>Enter User Name</label>
                <Input size="large" placeholder="Enter User Name" type="text" className='usertIUnput' name='userName' value={singup.userName} onChange={changeHandler} />
              </div>

              <div className="email">
                <label>Enter Email Address</label>
                <Input size="large" placeholder="Enter User Name" type="text" className='emailInput' name='email' value={singup.email} onChange={changeHandler} />
              </div>

              <div className="password">
                <label>Enter password</label>
                <Input size="large" placeholder="Enter User Name" type="text" className='passwordIUnput' name='password' value={singup.password} onChange={changeHandler} />
              </div>

              <div className="comformPassword">
                <label>Enter Conform Password</label>
                <Input size="large" placeholder="Enter User Name" type="text" className='comformPasswordInput' name='conformPassword' value={singup.conformPassword} onChange={changeHandler} />
              </div>

              <div className="submitButton">
                <Button type="primary" className='button' onClick={submitHandler}>Submit</Button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Singup
