import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    return (
        <Card 
            sx={{ 
                maxWidth: 345,
                maxHeight: 300,
                position: 'absolute', 
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: 'auto',
                overflow: 'auto',
            }}
            component="form"
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Login
                </Typography>

                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value)
                        setError(false);
                    }}
                    error={error}
                />

                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={e => {
                        setError(false);
                        setPassword(e.target.value)
                    }}
                    error={error}
                />
                
                <Button 
                    style={{ marginTop: '10px' }}
                    variant="contained" 
                    fullWidth
                    onClick={async() => {
                        if (username !== '' && password !== '') {
                            await axios.post('http://localhost:4000/users/authenticate', { username, password})
                                .then(async response => {
                                    if (response.status === 200) {
                                        await localStorage.setItem('token', response.data.token);
                                        history.push('/admin/dashboard');
                                    } else {
                                        await setError(true);
                                    }
                                })
                        } else {
                            await setError(true);
                        }
                    }}
                >
                    Login
                </Button>
            </CardContent>
        </Card>
    )
}

export default Login;