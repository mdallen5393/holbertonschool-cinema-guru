import './auth.css';
import Button from '../../components/general/Button';
import React, { useState } from 'react';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="auth">
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
        </form>
    )
}

export default Authentication;