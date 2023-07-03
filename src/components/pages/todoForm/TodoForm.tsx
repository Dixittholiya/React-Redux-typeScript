import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Todo_Actions ,{Todo_Update} from '../../../redux/action/TodoList'

const TodoForm = () => {
  const dispatch = useDispatch()
  const myState = useSelector((state:any)=>state.todoReducers)
  const [todo, setTodo] = useState({
    userName: "",
    email: "",
    password: "",
    conformPassword:""
  })

  useEffect(() => {
    // console.log("myState");
    const find = myState.list.filter((todo:any) => todo.id === myState.edittId)
    // console.log("find : ",find);
      if (find.length >= 1) {
        setTodo(find[0])
        
      }
  }, [myState.edittId !== null])

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [e.target.name]:e.target.value})
  }

  const submitHandler = ():void => {
    console.log(todo);
    dispatch(Todo_Actions(todo))
    setTodo({userName: "",email: "",password: "",conformPassword:""})
  }

  const updateHandler = ():void => {
    console.log("todo update : ",todo);
    
    dispatch(Todo_Update(todo))
    setTodo({userName: "",email: "",password: "",conformPassword:""})
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
              <Input size="large" placeholder="Enter User Name" type="text" className='usertIUnput' name='userName' value={todo.userName} onChange={changeHandler} />
            </div>

            <div className="email">
              <label>Enter Email Address</label>
              <Input size="large" placeholder="Enter User Name" type="text" className='emailInput' name='email' value={todo.email} onChange={changeHandler} />
            </div>

            <div className="password">
              <label>Enter password</label>
              <Input size="large" placeholder="Enter User Name" type="text" className='passwordIUnput' name='password' value={todo.password} onChange={changeHandler} />
            </div>

            <div className="comformPassword">
              <label>Enter Conform Password</label>
              <Input size="large" placeholder="Enter User Name" type="text" className='comformPasswordInput' name='conformPassword' value={todo.conformPassword} onChange={changeHandler} />
            </div>

            <div className="submitButton">
              {/* <Button type="primary" className='button' onClick={submitHandler}>Submit</Button> */}
              {
              myState.edittId >= 1 ? 
                  <Button type="primary" className='submitButton' onClick={updateHandler}>Update</Button> : 
                  <Button type="primary" className='submitButton' onClick={submitHandler}>Submit</Button> 

            }
            </div>
          </form>

        </div>
      </div>
    </div>

  </>
  )
}

export default TodoForm
