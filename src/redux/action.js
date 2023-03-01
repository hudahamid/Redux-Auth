import * as types from "./actionType";
//import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
//import {auth} from "../firebase";
 
const registerStart =   () => ({
 type: types.REGISTER_START,
});

const registerSuccess =(user)=>({
type : types.REGISTER_SUCCESS,
payload :user,
});

const registerFail = (error) =>({
    type:types.REGISTER_FAIL,
    payload:error,
});

export const registerIntiate = (email, password,displayName) => {
    return function (dispatch){
        dispatch(registerStart());
        createUserWithEmailAndPassword(email,password) .then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error)=>dispatch(registerFail(error.message)))
    }
}

