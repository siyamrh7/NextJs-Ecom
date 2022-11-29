import axios from "axios"

export const AddCategoryAction = (state, token) => async (dispatch) => {
    try {
        let headersList = {
            "Authorization": token
        }
        const rawResponse = await fetch(process.env.NEXT_PUBLIC_URI+"/createcategory", {
            method: "POST",
            body: state,
            headers: headersList
        });
        const data = await rawResponse.json();
        dispatch({ type: "ADD_CATEGORY", payload: data })
    } catch (error) {
        dispatch({ type: "ADD_CATEGORY", payload: error.message })
    }
}

export const GetCategoryAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URI}/getcategory`)

        dispatch({ type: "GET_CATEGORY", payload: data })
    } catch (error) {
        dispatch({ type: "GET_CATEGORY", payload: error.message })
    }
}
