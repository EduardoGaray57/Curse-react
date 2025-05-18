import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart.js";

export const CartContext = createContext()

function useCartReducer() {
    const [state, dispatch] = useReducer( cartReducer, cartInitialState )

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const RemoveFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    }) 
    
    return {
        state,
        addToCart,
        RemoveFromCart,
        clearCart
    }

}

export function CartProvider({ children }) {
    const { state, addToCart, RemoveFromCart, clearCart } = useCartReducer()
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            RemoveFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}