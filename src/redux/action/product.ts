import { IGetProduct, ProductEnum } from "../../components/model/mode"

interface Todo_Action {
    type:string
    payload:IGetProduct
}

export const saveproductData = (data:IGetProduct) => {
    return {
        type:ProductEnum.product,
        payload:data
    }
}
export type Action = Todo_Action

export default saveproductData