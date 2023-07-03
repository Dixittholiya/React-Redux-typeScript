import { Action } from "../action/UserAction"
import { UserActions } from "../../components/model/mode"


const initialState = {
    loginUserData:{}
}
// type Action = {
//     type:string,
//     payload?:ISingup
// }



const userReducers = (state = initialState, action : Action) => {
    switch (action.type){
        case  UserActions.LOGINUSERDATA :
            return {
                ...state,
                loginUserData:action.payload
            }
        case  UserActions.LOGOUT :
            return {
                ...state,
                loginUserData:{}
            }
        
            
        default :
        return state
    }
}
export default userReducers