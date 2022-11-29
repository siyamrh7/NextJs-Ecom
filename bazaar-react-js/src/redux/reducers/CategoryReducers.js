import { Toast } from '../../theme/Toast'
var InitState = {
    categories: []
}

export const Category = (state = InitState, action) => {

    switch (action.type) {
        case "GET_CATEGORY":
            return { ...state, categories: action.payload.categories }
        case "ADD_CATEGORY":
            Toast(action.payload)
            return { ...state, categories: [action.payload.category,...state.categories] }
        default:
            return state
    }
}


