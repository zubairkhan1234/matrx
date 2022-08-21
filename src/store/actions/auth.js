import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        user: null,
        profileData: {},
        message: "",
        isloading: false
    },
    reducers: {
        authAction: (state, actions) => {
            state.user = actions.payload.loginRequestUser
            state.profileData = actions.payload.userProfile
            state.message = actions.payload.message

        },
        requesting: (state, actions) => {
            state.isloading = actions.payload
        }
    }
})

export const { authAction, requesting } = authSlice.actions
export default authSlice.reducer


export const loginAuth = (logindata) => {

    return (dispatch) => {

        dispatch(requesting(true))

        axios({
            url: 'http://localhost:5000/login',
            method: 'post',
            data: logindata,
            withCredentials: true
        })
            .then(function ({ data }) {
                if (data.status === 200) {
                    dispatch(authAction(data))
                    dispatch(requesting(false))
                } else {
                    dispatch(requesting(false))
                    alert(data.message)
                }
            })
            .catch(function (error) {
                alert(error.message)
                dispatch(requesting(false))
                console.log("ldafjldja ", error.response.data.message)

            });
    }


}