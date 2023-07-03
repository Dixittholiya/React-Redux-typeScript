import { ISingup,UserActions } from "../../components/model/mode"
interface IloginUserData {
    type:string
    payload:ISingup
}

// const LoginUserData = (data:ISingup) => {
//     return (dispatch:Dispatch) => {
//         dispatch({
//             type:UserActions.LOGINUSERDATA,
//             payload:data
//         })
//     }
// }

export const LoginUserData = (data:ISingup) => {
    return {
        type:UserActions.LOGINUSERDATA,
        payload:data
    }
}

export const removeUserData = (data:ISingup) => {
    return {
        type:UserActions.LOGOUT,
        payload:data
    }
}

export type Action = IloginUserData
export default LoginUserData