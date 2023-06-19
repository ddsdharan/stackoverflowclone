import * as api from "../Api";
import { setCurrentUser } from "./currentUser";

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


export const forgotPassword = (email) => async () => {
    try {
        await api.forgotPassword(email);
        // Handle any further actions or notifications after successful request
    } catch (error) {
        console.log(error);
        // Handle error cases, such as displaying error messages or taking specific actions
    }
};
