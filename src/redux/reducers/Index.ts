import  { combineReducers } from 'redux'
import todoReducers from './TodoList'
import saveProducts from './Product'
import userReducers from './UserReducers'


const rootreducers = combineReducers ({
    userReducers,
    todoReducers,
    saveProducts
})

export default rootreducers