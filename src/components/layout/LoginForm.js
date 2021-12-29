import * as React from 'react';
import { useFormik } from 'formik';
import useForm from '../../hooks/useForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '../common/Input';

const validate = (values) => {

    const errors = {}

    if(!values.name) {
        errors.username = 'User name required';
    }

    if(!values.password) {
        errors.password = 'Password required';
    }

    return errors
}

function LoginForm() {

    const data = {
        username: 'admin',
        password: 'admin'
    }

    React.useEffect(() => {
        // apiFecth({...data});
    }, []);

    const apiFecth = async({username, password }) => {
        console.log(username, password);
        
        // const url = 'http://192.168.200.102:8080/rest/usuarios/usuarios.php';
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const requestOption  = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    // "tipo":"login_cliente",
                    "body":`${username}`,
                    "title":`${password}`,
                }
            )
        };
        const response = await fetch(url, requestOption);
        const data = await response.json();
        console.log(data.id);

    }
    
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate: values => {
            const errors = {};
            if (!values.username) {
                errors.username = 'User name required';
            }
            if (!values.password) {
                errors.password = 'Password required';
            }
            return errors;
        },
        onSubmit: values => {
            // console.log(values);
            apiFecth({...values});// apiFecth({values.username, values.password});
        }
    })

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
        <form onSubmit={formik.handleSubmit} action='/about'>
            <div>
                <Input
                    id="username"
                    label="User name"
                    name="username"
                    autoComplete="username"
                    required
                    fullWidth
                    autoFocus    
                    value={formik.values.username}
                    onBlur={formik.onBlur}
                    onChange={formik.handleChange}
                    // {...(formik.errors.username && { error: formik.errors.username })}  
                    // error="Field is required"
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    fullWidth
                    value={formik.values.password}
                    onBlur={formik.onBlur}
                    onChange={formik.handleChange}
                    // {...(formik.errors.password && { error: formik.errors.password })}
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