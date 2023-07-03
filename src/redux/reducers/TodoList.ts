import { Action } from "../action/TodoList"
import { TodoActions } from "../../components/model/mode"

const initialState = {
    list:[],
    edittId:null
}
// type Action = {
//     type:string,
//     payload?:ISingup
// }



const todoReducers = (state = initialState,action : Action) => {
    switch (action.type){
        case TodoActions.ADDTODO:
            return ({
                ...state,
                editId: null,
                list: [...state.list, action.payload]
            })

        case TodoActions.TODODELETE :
            let array = [...state.list]
            let id:any = action.payload
            array.splice(id-1, 1);
            console.log(" list: [...array]",array);
            
            return ({
                ...state,
                editId: null,
                list: [...array]
            });

        case TodoActions.EDIT : 
            return{
                ...state,
                edittId: action.payload
            }

        case TodoActions.UPDATE : 
        
            let array1:any = [...state.list]
            let id1 = action.payload.id
            let index1 = array1.findIndex((a:any) => a.id === id1);
            console.log("update index1 : ", index1);
            array1[index1] = {
                ...action.payload
            }
            console.log("array1 : ",array1);
            return {
                ...state,
                edittId:null,
                list:[...array1]
            }
        default :
            return state
    }
}
export default todoReducers