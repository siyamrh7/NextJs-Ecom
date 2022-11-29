import { Toast } from '../../theme/Toast'
var InitState = {
    products: [],product:null
}

export const Product = (state = InitState, action) => {

    switch (action.type) {
        case "GET_PRODUCT":
            return { ...state, products: action.payload.products }
        case "ADD_PRODUCT":
            Toast(action.payload)
            return { ...state, products: [action.payload.product, ...state.products] }
        case "GET_SINGLE_PRODUCT":
            return { ...state, product: action.payload.product, }
        default:
            return state
    }
}


