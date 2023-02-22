import { CreateNewAccount } from '../../../api/accApi';
import actions from './actions';

const CreateAccount = (user,password) => {
    return dispatch => {
        return CreateNewAccount(user,password)
        .then(result=>{
            dispatch(actions.CreateAccSuccess(result));
            return result;
        })
        .catch(err=>{
            dispatch(actions.CreateAccFailed("Account not created"));
            alert("Account not created");
            return err;
        })
    }
}



export default {
    CreateAccount
}