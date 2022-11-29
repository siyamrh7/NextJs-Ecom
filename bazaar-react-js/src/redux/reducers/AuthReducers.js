import { Toast } from '../../theme/Toast'
import jwt from 'jwt-decode'
var InitState = {
    token: "",
    stoken: "",
    RegStatus: false,
    LogStatus: false,
    user: null,
    shop: null
}

export const Authentication = (state = InitState, action) => {

    switch (action.type) {

        case "TOKEN":
            const User = jwt(action.payload)
            var user1 = null
            var LogStatus = false
            if (User.user) {
                user1 = User.user
                LogStatus = true
            }
            return { ...state, token: action.payload, user: user1, LogStatus }
        case "STOKEN":
            const User3 = jwt(action.payload)
            var LogStatus = false
            var shop2 = null
            if (User3.shop) {
                LogStatus = true
                shop2 = User3.shop
            }
            return { ...state, stoken: action.payload, shop:shop2, LogStatus }

        case "LOGOUT":
            return { ...state, token: "", RegStatus: false, LogStatus: false, user: null, }
        
        case "SLOGOUT":
                return { ...state, stoken: "", RegStatus: false, LogStatus: false , shop: null }
        case "USER_REG":
            Toast(action.payload);
            return { ...state, RegStatus: action.payload.status }
        case "USER_LOG":
            Toast(action.payload);
            const { user } = jwt(action.payload.token)
            return { ...state, token: action.payload.token, LogStatus: action.payload.status, user }
        case "SHOP_REG":
            Toast(action.payload);
            return { ...state, RegStatus: action.payload.status }
        case "SHOP_LOG":
            Toast(action.payload);
            const { shop } = jwt(action.payload.token)
            return { ...state, token: action.payload.token, LogStatus: action.payload.status, shop: { ...shop } }
        default:
            return state
    }
}


