import { Coffee, IAddress, paymentMethods } from "./reducers";

export enum ActionsTypes{
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART',
    UPDATE_PRODUCT_TO_CART = 'UPDATE_PRODUCT_TO_CART',
    INSERT_ADDRESS = 'INSERT_ADDRESS',
    INSERT_PAYMENT_METHOD = 'INSERT_PAYMENT_METHOD'
}

export function addProductAction(newProduct: Coffee){
    return {type: ActionsTypes.ADD_PRODUCT_TO_CART, payload: {newProduct}}
}

export function removeProductAction(id: number){
    return {type: ActionsTypes.REMOVE_PRODUCT_TO_CART, payload: {id}}
}

export function updateQuantityProductAction(id: number, quantity: number){
    return {type: ActionsTypes.UPDATE_PRODUCT_TO_CART, payload: {id, quantity}}
}

export function insertAddressAction(address: IAddress){
    return {type: ActionsTypes.INSERT_ADDRESS, payload: {address}}
}

export function insertPaymentMethodAction(paymentMethod: paymentMethods){
    return {type: ActionsTypes.INSERT_PAYMENT_METHOD, payload: {paymentMethod}}
}
