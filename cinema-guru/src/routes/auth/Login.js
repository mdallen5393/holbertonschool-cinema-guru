import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from FontAwesomeIcon;

const Login = ({username, password, setUsername, setPassword}) => {
    return (
        <div className="login">
            <Input
                label="Username:"
                type="text"
                className=""
                value=""
                setValue=""
                icon=""
                inputAttributes=""
            />
            <Input
                label="Username:"
                type="text"
                className=""
                value=""
                setValue=""
                icon=""
                inputAttributes=""
            />
            <Button
                label="Sign Up"
                type="submit"
                className=""
                onClick=""
                icon=""
            />
        </div>
    );
};

export default Login;