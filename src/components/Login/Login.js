import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
        <Link to="/registration"><h3>create account</h3></Link>
        </div>
    );
};

export default Login;