import React from 'react';
import './App.css';
import {Routes , Route, BrowserRouter } from "react-router-dom" 
import Header from './components/header/Header';
import List from './components/pages/list/List';
import HomePage from './components/pages/home/HomePage';
import Singup from './components/pages/singup/Singup';
import Login from './components/pages/login/Login';
import TodoForm from './components/pages/todoForm/TodoForm';
import Product from './components/pages/product/Product';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/list" element={ <List />} />
            <Route path="/forms" element={<TodoForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="*" element={<h1>404 Page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
