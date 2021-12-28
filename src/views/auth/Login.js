import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import LoginForm from '../../components/layout/LoginForm';
import Card from '../../components/layout/Card';

function Login() {
    return (
        <div className="login-container">
            <div className="login-image"/>
            <div className="login-form-container">
                <div className="login-form-wrapper">
                    <Card className='center'>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h1>
                            Log in
                        </h1>
                        <LoginForm />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;