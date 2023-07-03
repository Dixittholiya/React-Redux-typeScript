import React from 'react'
import { useSelector } from 'react-redux';
const HomePage = () => {
  let myUserState:string = useSelector((state:any) => state.userReducers.loginUserData.userName  )
  // console.log("myUserState : ", myUserState);

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {
        myUserState ?
        <h1 style={{textAlign:"center"}}> Hello {myUserState}</h1>
        :
        null

      }

      <img src="https://i.pinimg.com/originals/a0/7e/7c/a07e7c61f74aee3d9b414db9dc4e7c40.jpg" alt="" style={{width:"100%"}}/>
    </div>
  )
}

export default HomePage
