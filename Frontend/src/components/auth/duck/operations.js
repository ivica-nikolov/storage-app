import { LogInUser } from '../../../api/authApi';
import actions from './actions';

const logIn = (user,password) => {
    return dispatch => {
        return LogInUser(user,password)
        .then(result=>{
            dispatch(actions.logInSuccess(result));
            return result;
        })
        .catch(err=>{
            dispatch(actions.logInFailed("Invalid Credentials"));
            alert("Invalid Credentials");
            return err;
        })
    }
}

const logOut =() =>{
    return dispatch =>{
        dispatch(actions.logOutUser())
    }
}

export default {
    logIn,
    logOut
}