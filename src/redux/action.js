import * as types from "./actionType";
import { createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../firebase"

const registerStart =   () => ({
 type: types.REGISTER_START,
});

const registerSuccess =(user)=>({
type : types.REGISTER_SUCCESS,
payload :user,
});

const registerFail = (error) =>({
    type: types.REGISTER_FAIL,
    payload:error,
});
const loginStart = () => ({
    type : types.LOGIN_FAIL,
});

const loginSuccess = (user) => ({
    type : types.LOGIN_SUCCESS,
    payload : user
});

const loginFail = (error) => ({
    type : types.LOGIN_FAIL,
    payload : error
});


const logoutStart = () => ({
    type : types.LOGOUT_START,
});

const logoutSuccess = (user) => ({
    type : types.LOGOUT_SUCCESS,
    payload : user
});

const logoutFail = (error) => ({
    type : types.LOGOUT_FAIL,
    payload : error
});
export const registerIntiate = (email, password,displayName) => {
    return function (dispatch){
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth,email,password) .then(({user})=>{
            updateProfile(user,{
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error)=>dispatch(registerFail(error.message)))
    }
}

export const loginInitiate = (email , password) => {
    return function (dispatch){
        dispatch (loginStart());
        signInWithEmailAndPassword(auth, email , password).then (({user})=>{
           
            dispatch(loginSuccess(user))
        })
        .catch((error)=> dispatch(loginFail(error.message)));
    }
}

export const logoutInitiate = () => {
    return function (dispatch){
        dispatch (logoutStart());
        signOut(auth).then ((resp)=>
           
            dispatch(logoutSuccess())
    )
        .catch((error)=> dispatch(logoutFail(error.message)));
    }
}