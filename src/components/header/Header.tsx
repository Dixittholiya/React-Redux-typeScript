import React, { useEffect, useState } from 'react'
import { Menu } from "antd";
import {HomeOutlined,SolutionOutlined,FormOutlined,LoginOutlined,PoweroffOutlined,} from "@ant-design/icons";
  import { GiLoincloth } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { IMenuArray } from '../model/mode';
import { removeUserData } from '../../redux/action/UserAction';

const Header:React.FC = () => {
  const dispatch = useDispatch();
  let myUserState = useSelector((state:any) => state.userReducers.loginUserData)
  // console.log("myUserState logout : ",myUserState);
  
    const [menuItems, setMenuItems] = useState<IMenuArray[]>([]);
    const  navigate =  useNavigate()
    
    useEffect(() => {
      let menuArray:IMenuArray[] = [];
      // console.log("myUserState------------->>", myUserState);
      if (myUserState.email) {
        menuArray = [
          {
            label: "Home123",
            key: "/",
            icon: <HomeOutlined style={{ fontSize: "17px" }} />,
          },
          {
            label: "Product",
            key: "/Product",
            icon: <GiLoincloth style={{ fontSize: "17px" }} />,
          },
          {
            label: "List",
            key: "/list",
            icon: <SolutionOutlined style={{ fontSize: "17px" }} />,
          },
          {
            label: "Forms",
            key: "/forms",
            icon: <FormOutlined style={{ fontSize: "17px" }} />,
          }, 
          {
            label: "Logout",
            key: "/logout",
            icon: <PoweroffOutlined style={{ fontSize: "17px" }} />,
            danger: true,
          },
        ];
      } else {
        menuArray = [
          {
            label: "Home456",
            key: "/",
            icon: <HomeOutlined style={{ fontSize: "17px" }} />,
          },
          {
            label: "Product",
            key: "/Product",
            icon: <GiLoincloth style={{ fontSize: "17px" }} />,
          },
          {
            label: "List",
            key: "/list",
            icon: <SolutionOutlined style={{ fontSize: "17px" }} />,
          },
          {
            label: "Forms",
            key: "/forms",
            icon: <FormOutlined style={{ fontSize: "17px" }} />,
          },
  
          { label: "Login", key: "/login", icon: <LoginOutlined style={{ fontSize: "17px" }} />},
          { label: "Singup", key: "/Singup", icon: <FaWpforms style={{ fontSize: "17px" }}/>},
          
        ];
      }
    
        setMenuItems(menuArray);
      }, [myUserState]);

    // let menuArray = [
    //           {
    //             label: "Home",
    //             key: "/home",
    //             icon: <HomeOutlined style={{ fontSize: "17px" }} />,
    //           },
    //           {
    //             label: "Product",
    //             key: "/product",
    //             // icon: <GiLoincloth style={{ fontSize: "17px" }} />,
    //           },
    //           {
    //             label: "List",
    //             key: "/list",
    //             icon: <SolutionOutlined style={{ fontSize: "17px" }} />,
    //           },
    //           {
    //             label: "Forms",
    //             key: "/forms",
    //             icon: <FormOutlined style={{ fontSize: "17px" }} />,
    //           },
    //           {
    //             label: "Login",
    //             key: "/login",
    //             icon: <FormOutlined style={{ fontSize: "17px" }} />,
    //           },
    //           {
    //             label: "Singup",
    //             key: "/singup",
    //             icon: <FormOutlined style={{ fontSize: "17px" }} />,
    //           },
      
    //           // { label: "Login", key: "/login", icon: <LoginOutlined style={{ fontSize: "17px" }} />},
    //           // { label: "Singup", key: "/Singup", icon: <FaWpforms style={{ fontSize: "17px" }} />},
      
    //           {
    //             label: "Logout",
    //             key: "/logout",
    //             icon: <PoweroffOutlined style={{ fontSize: "17px" }} />,
    //             danger: true,
    //           },
    //         ];


  return (
    <div>
         <Menu
        style={{
          display: "flex",
          fontSize: "17px",
          backgroundColor: "#f4f4f4",
        }}
        onClick={(info) => {
          if (info.key === "/logout") {
            dispatch(removeUserData(myUserState));
            navigate("/")
          } else {
            navigate(info.key);
          }
        }}
        items={menuItems}
      ></Menu>

      <Outlet />
    </div>
  )
}

export default Header
