
import { productActionTypes } from "./productsActionTypes";

export const ProductInitialState = {
    loading: false,
    products: [],
    error: false,
    cart:[],
    wishlist:[],


};

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case productActionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case productActionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products:action.payload,
                error: false,
            }
        case productActionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true, 
            }
        case productActionTypes.Add_TO_CART:
            return {
                ...state,
                loading: false,
                error: false, 
                cart:[...state.cart,action.payload]
            }
        case productActionTypes.Add_TO_Wishlist:
            console.log("wishlist")
            return {
                ...state,
                loading: false,
                error: false, 
                wishlist:[...state.wishlist,action.payload]
            }
        default:
            return state;
    }
}