import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersComponent } from './UsersComponent';
import { usersOperations } from './duck';

export default function UsersContainer() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const message = useSelector(state => state.usersReducer.message);

    useEffect(() => {
        dispatch(usersOperations.fetchUsers());
    }, [dispatch])

    return (
        <div style={{paddingTop:'53px'}}>
            <UsersComponent listOfUsers={users} message={message} />
        </div>
    )
}