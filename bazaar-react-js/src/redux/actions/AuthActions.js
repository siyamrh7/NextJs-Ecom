import axios from 'axios'
export const UserRegAction=(state)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(process.env.NEXT_PUBLIC_URI+'/createuser',{...state})
        dispatch({type:"USER_REG",payload:data})
    } catch (error) {
        dispatch({type:"USER_REG",payload:error.message})
    }
}

export const UserLogAction=(state)=>async(dispatch)=>{
    try {
        
        const {data}=await axios.post(process.env.NEXT_PUBLIC_URI+'/loginuser',{...state})
        dispatch({type:"USER_LOG",payload:data})
        if(data.status){
            localStorage.setItem("token",data.token)
        }
    } catch (error) {
        dispatch({type:"USER_LOG",payload:error.message})
    }
}


export const ShopRegAction=(state)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(process.env.NEXT_PUBLIC_URI+'/createshop',{...state})
        dispatch({type:"SHOP_REG",payload:data})
    } catch (error) {
        dispatch({type:"SHOP_REG",payload:error.message})
    }
}

export const ShopLogAction=(state)=>async(dispatch)=>{
    try {
        
        const {data}=await axios.post(process.env.NEXT_PUBLIC_URI+'/loginshop',{...state})
        dispatch({type:"SHOP_LOG",payload:data})
        if(data.status){
            localStorage.setItem("stoken",data.token)
        }
    } catch (error) {
        dispatch({type:"SHOP_LOG",payload:error.message})
    }
}