import userEvent from "@testing-library/user-event";
import * as types from "./actionType";
import {auth} from "../firebase";
 
const registerStart =   () => ({
 type: types.REGISTER_START,
});

const registerSuccess =()=>({
type : types.REGISTER_SUCCESS,
payload :user,
});

const registerFail = () =>({
    type:types.REGISTER_FAIL,
    payload:error,
});

export const registerIntiate = (email, password,displayName) => {
    return function (dispatch){
        dispatch(registerStart);
        auth.createUserWithEmailAndPassword(email,password) .then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error)=>dispatch(registerFail(error.message)))
    }
}

