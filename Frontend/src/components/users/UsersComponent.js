import React from 'react';
import PropTypes from 'prop-types';

export const UsersComponent = ({ listOfUsers, message }) => {
    console.log(listOfUsers);
    console.log(message);
    return (
        <div>
            {message === undefined ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfUsers.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                : <p>An error has occured {message}</p>}
        </div>
    )
}

UsersComponent.propTypes = {
    listOfUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    message: PropTypes.string
}