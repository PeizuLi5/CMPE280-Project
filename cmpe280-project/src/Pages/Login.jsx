import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import "../Styles/Form.css";
import "../Styles/General.css";

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [userInput, setUserInput] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleVisibility = () => {
        if(error !== ""){
            setError("");
        }
        setShowPassword(!showPassword);
    }

    const removeErr = () => {
        if(error !== ""){
            setError("");
        }
    }

    const userInputOnChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    }

    const login = (e) => {
        e.preventDefault();

        if(userInput.username === "" || userInput.password === ""
            || userInput.username === null || userInput.password === null){
            setError("Username and Password cannot be empty.")
        }
        else{
            console.log(userInput);
            navigate("/")
        }
    }

    return(
        <div className='form-container'>
            <div className='form-title'>
                <h1 className="page-title-text">Login</h1>
            </div>
            <div>
                <div className='username-tf'>
                    <TextField
                        className='username-tf-setting'
                        name="username"
                        label="username"
                        type="text"
                        variant='outlined'
                        required
                        onClick={removeErr}
                        onChange={userInputOnChange}
                    />
                </div>
                <div className='password-tf'>
                    <TextField
                        className='password-tf-setting'
                        name="password"
                        label="password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        required
                        onClick={removeErr}
                        onChange={userInputOnChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleVisibility}
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Link className="to-link" to="/login">Forget Password?</Link>
                </div>
                <div className='to-link-container'>
                    <Link className='to-link' to="/register">Don't have an account? Register.</Link>
                </div>
                {error && <div className='err-container'>{error}</div>}
                <div className='submit-btn-container'>
                    <Button className='submit-btn' onClick={login} variant='contained' color='primary' fullWidth>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;