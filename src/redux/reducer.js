import * as types from "./actionType"

const intialState= {
    loading:false,
    currentUser:null,
    error:null,
}

const userReducer=(state=intialState,action) =>{
    switch(action.type){
      case types.REGISTER_START:
        return{
            ...state,
            loading:true,
        };
        case types.REGISTER_SUCCESS:
            return{
                ...state,
                loading:false, 
                currentUser:action.payload,
            };
            
            case types.REGISTER_FAIL:
                return{
                    ...state,
                    loading:false, 
                    error:action.payload,    
                };
             default:
               return state;
    }
}

export default userReducer;

