import { ISingup,TodoActions,ITodosActions } from "../../components/model/mode"
let userId = 0
interface Todo_Action {
    type:string
    payload:ITodosActions
}


export const Todo_Actions = (data:ISingup) => {
    userId++
    return {
        type:TodoActions.ADDTODO,
        payload:{
            ...data,
            id:userId
        }
    }
}

export const Todo_Delete = (id:number) => {
    return {
        type:TodoActions.TODODELETE,
        payload:id
    }
}

export const Todo_edit = (id:number) => {
    return {
        type:TodoActions.EDIT,
        payload:id
    }
}

export const Todo_Update = (data:ISingup) => {
    return {
        type:TodoActions.UPDATE,
        payload:data
    }
}

export type Action = Todo_Action
export default Todo_Actions