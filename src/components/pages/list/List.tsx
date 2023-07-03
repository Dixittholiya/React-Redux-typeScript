import React from 'react'
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'

import { Button } from 'antd';
import { Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux'
import { Todo_Delete, Todo_edit } from '../../../redux/action/TodoList';

const List:React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let todoListData = useSelector((state:any) => state.todoReducers.list);
  // console.log("todoListData : ",todoListData);
  
  const { Column, ColumnGroup } = Table;

  const deleteHandler = (id:number) => {
    // console.log("deleteHandler",id);
    // alert(id)
    const confirmBox = window.confirm("You Wont To Delete This data");

    if (confirmBox === true) {
      dispatch(Todo_Delete(id))
    }
  }

  const editHandler = (id:number):void => {
    console.log("editHandler");
    dispatch(Todo_edit(id))
    navigate("/forms")
  }

  return (
    <div>
      <h1>List Page</h1>

      <Table dataSource={todoListData} >
        <ColumnGroup title="Todo List">
          <Column title="#" dataIndex="id" key="id" />
          <Column title="User Name" dataIndex="userName" key="id" />
          <Column title="Email" dataIndex="email" key="id" />
          <Column title="Password" dataIndex="password" key="id" />
          <Column title="Conform Password" dataIndex="conformPassword" key="id" />
        </ColumnGroup>

        <Column
          title="Action"
          key="action"
          render={(record) => (
            <Space size="middle">
              {/* <Button type="primary" ghost onClick={() => alert(record.id)}>Delete alert</Button> */}
              <Button type="primary" ghost > <EditTwoTone style={{ fontSize: "23px" }} className='edit-icon' onClick={() => editHandler(record.id)}/>{' - '} Edit</Button>
              <Button type="primary" ghost > <DeleteTwoTone style={{ fontSize: "23px" }} onClick={() => deleteHandler(record.id)}/>{' - '}Delete</Button>
              {/* <Button type="primary" ghost onClick={() => editHandler(record.id)}> <EditTwoTone style={{ fontSize: "23px" }} className='edit-icon' />{' - '} Edit</Button>
              <Button type="primary" ghost onClick={() => deleteHandler(record.id)}> <DeleteTwoTone style={{ fontSize: "23px" }} />{' - '}Delete</Button> */}
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

export default List
