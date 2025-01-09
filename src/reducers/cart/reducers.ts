import { ActionsTypes } from "./actions";
export interface IAddress{
    cep:string
    rua:string
    numero:string
    complemento:string
    bairro:string
    cidade:string
    uf:string
}
export type paymentMethods = "Cartão de crédito" | "Cartão de débito" | "Dinheiro"
export interface Coffee {
    id: number;
    name: string;
    description: string;
    type: string[];
    price: number;
    quantity: number;
    image: string;
  }

interface CartState {
    productsSelected: Coffee[]
    delivery: number;
    address?: IAddress;
    paymentMethod?: paymentMethods;
}

export function CartReducer(state: CartState, action: any){
    switch(action.type){
        case ActionsTypes.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                productsSelected: [...state.productsSelected, action.payload.newProduct]
            }
        case ActionsTypes.REMOVE_PRODUCT_TO_CART:
            return {
                ...state,
                productsSelected: state.productsSelected.filter(product => product.id !== action.payload.id)
            }
        case ActionsTypes.UPDATE_PRODUCT_TO_CART:
            return {
                ...state,
                productsSelected: state.productsSelected.map(product => {
                    if(product.id === action.payload.id){
                        return {
                            ...product,
                            quantity: action.payload.quantity
                        }
                    }
                    return product
                })
            }
        case ActionsTypes.INSERT_ADDRESS:
            return {
                ...state,
                address: action.payload.address
            }
        case ActionsTypes.INSERT_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload.paymentMethod
            }
        default:
            return state
    }
}