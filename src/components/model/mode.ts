export interface IlistArray {
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    mobileNumber:number
}

export interface ISingup {
    id?:string,
    __v?:number,
    userName:string,
    email:string,
    password:string,
    conformPassword:string
}

export interface ILogin {
    email:string,
    password:string
}

export enum UserActions  {
    LOGOUT = "USER_LOGOUT",
    LOGINUSERDATA = "LOGIN_USER_DATA",
}

export interface ITodosActions {
    id?:number,
    userName?:string,
    email?:string,
    password?:string,
    conformPassword?:string
}

export enum TodoActions  {
    ADDTODO = "ADD_TODO",
    TODODELETE = "DELETE_TODO",
    EDIT = "EDIT_SINGLE_TODO",
    UPDATE = "UPDATESINGLE_TODO",
}

export interface IGetProduct {
    id:number,
    category:string,
    price:string,
    image:string,
    __v:number,

}

export enum AddProduct  {
    Product = "ADD_PRODUCT"
}

export enum ProductEnum  {
    product = "SAVE_PRODUCT",
}

export interface IMenuArray {
    label:string,
    key:string,
    icon?:any,
    danger?:boolean
}