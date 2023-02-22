import actions from "./actions";
import { getUsers } from "../../../api/usersApi";

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams));
        return getUsers()
            .then(result => {
                dispatch(actions.fetchUsersSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchUsersFail(err));
                return err;
            })
    }
}
// eslint-disable-next-line
export default {
    fetchUsers
}