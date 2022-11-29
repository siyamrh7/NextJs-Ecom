import axios from 'axios'
export const AddProductAction = (state, token) => async (dispatch) => {
    try {
        let headersList = {
            "Authorization": token
        }
        const rawResponse = await fetch(process.env.NEXT_PUBLIC_URI+"/createproduct", {
            method: "POST",
            body: state,
            headers: headersList
        });
        const data = await rawResponse.json();
        dispatch({ type: "ADD_PRODUCT", payload: data })
    } catch (error) {
        dispatch({ type: "ADD_PRODUCT", payload: error.message })
    }
}
export const GetProductAction = (state) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URI}/getproductbysearch?search=${state}`)

        dispatch({ type: "GET_PRODUCT", payload: data })
    } catch (error) {
        dispatch({ type: "GET_PRODUCT", payload: error.message })
    }
}

export const GetSingleProductAction = (state) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URI}/product?id=${state}`)

        dispatch({ type: "GET_SINGLE_PRODUCT", payload: data })
    } catch (error) {
        dispatch({ type: "GET_SINGLE_PRODUCT", payload: error.message })
    }
}