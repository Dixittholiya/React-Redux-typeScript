import { Action } from "../action/product"
import { ProductEnum } from "../../components/model/mode";

const initialState = {
    saveProducts:[]
}


const saveProducts = (state = initialState,action : Action) => {
    switch (action.type){
        case  ProductEnum.product :
            return {
                ...state,
                saveProducts:action.payload
            }
        default :
        return state
    }
}
export default saveProducts