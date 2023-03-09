import * as types from './actionType';
//import {auth} from '../firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile} from "firebase/auth";
import {auth,googleAuthProvider,facebookAuthProvider} from '../firebase';

const registerStart = () => ({
    type : types.REGISTER_START,
});

const registerSuccess = (user) => ({
    type : types.REGISTER_SUCCESS,
    payload : user
});

const registerFail = (error) => ({
    type : types.REGISTER_FAIL,
    payload : error
});


const loginStart = () => ({
    type : types.LOGIN_START,
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

export const setUser = (user) => ({
type: types.SET_USER,
payload: user,
});


const googleSignInStart = () => ({
    type : types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
    type : types.GOOGLE_SIGN_IN_SUCCESS,
    payload : user
});

const googleSignInFail = (error) => ({
    type : types.GOOGLE_SIGN_IN_FAIL,
    payload : error
});


const facebookSignInStart = () => ({
    type : types.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
    type : types.FACEBOOK_SIGN_IN_SUCCESS,
    payload : user
});

const facebookSignInFail = (error) => ({
    type : types.FACEBOOK_SIGN_IN_FAIL,
    payload : error
});

export const registerInitiate = (email , password , displayName) => {
    return function (dispatch){
        dispatch (registerStart());
        createUserWithEmailAndPassword(auth, email , password).then (({user})=>{
            updateProfile(user,{
                displayName
            })
            dispatch(registerSuccess(user))
        })
        .catch((error)=> dispatch(registerFail(error.message)));
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

export const googleSignInInitiate = () => {
    return function (dispatch){
        dispatch (googleSignInStart());
        signInWithPopup(auth,googleAuthProvider).then (({user})=>{
           
            dispatch(googleSignInSuccess(user))
        })
        .catch((error)=> dispatch(googleSignInFail(error.message)));
    }
}


export const facebookSignInInitiate = () => {
    return function (dispatch){
        dispatch (facebookSignInStart());
        signInWithPopup(auth,facebookAuthProvider.addScope("user_birthday,email")).then (({user})=>{
           
            dispatch(facebookSignInSuccess(user))
        })
        .catch((error)=> dispatch(facebookSignInFail(error.message)));
    }
}