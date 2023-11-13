import './auth.css';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

import React, { useState } from 'react';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (onSubmit) => {
        onSubmit.preventDefault();

        if (_switch) {
            axios.post('/api/auth/login', {
                username: username,
                password: password
            })
            .then(response => {
                localStorage.setItem('accessToken', response.data.token);
                setUserUsername(username);
                setIsLoggedIn(true);
            })
            .catch(error => {
                console.error(error);
            });
        } else {
            axios.post('/api/auth/register', {
                username: username,
                password: password
            })
            .then(response => {
                localStorage.setItem('accessToken', response.data.token);
                setUserUsername(username);
                setIsLoggedIn(true);
            })
            .catch(error => {
                console.error(error);
            });
        }
    }

    return (
        <form className="auth" onSubmit={handleSubmit}>
            <div className="auth-buttons">
                <Button
                    label="Sign In"
                    type="button"
                    className={_switch ? "light-red" : "dark-red"}
                    onClick={() => set_switch(true)}
                />
                <Button
                    label="Sign Up"
                    type="button"
                    className={_switch ? "dark-red" : "light-red"}
                    onClick={() => set_switch(false)}
                />
            </div>
            {_switch ? <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            /> : <Register
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            />}
        </form>
    )
}

export default Authentication;