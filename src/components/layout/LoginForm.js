import * as React from 'react';
import useForm from '../../hooks/useForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '../common/Input';

function LoginForm() {

    const [value, handleChange] = useForm({ username:'', password:'' });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('username'),
            password: data.get('password'),
        });
    };
    
    return (
        <form onSubmit={handleSubmit} action='/about'>
            <div>
                <Input
                    value={value.username}
                    id="username"
                    label="User name"
                    name="username"
                    autoComplete="username"
                    required
                    fullWidth
                    autoFocus    
                    onChange={handleChange}
                    // error="Field is required"
                />
                <TextField
                    value={value.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    fullWidth
                    onChange={handleChange}
                    // error="Field is required"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
            </div>
        </form>
    );
}

export default LoginForm;