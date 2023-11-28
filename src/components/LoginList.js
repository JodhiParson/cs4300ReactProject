import React from 'react';
import Login from './Login';


// Accepts the users array as a prop and uses map() 
const LoginList = (props) => {
    return (
        <div>
            <ul>
                {props.users.map((user) => (
                <Login
                    key={user.id}
                    userName={user.userName}
                    password={user.password}
                />
                ))}
            </ul>
        </div>
    );

};

export default LoginList;