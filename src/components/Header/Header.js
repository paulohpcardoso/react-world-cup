import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Header = () => {
    const history = useHistory();

    return (
        <div 
            style={{ 
                backgroundColor: '#56042C', 
                width: '100%', 
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                padding: '10px',
                justifyContent: 'space-between'
            }}
        >
            <Typography 
                color='#FFFFFF'
                variant="h5"
                onClick={() => history.push('/admin/dashboard')}
            >
                Dashboard Copa do Mundo 2022
            </Typography>
            <Button 
                style={{ 
                    marginRight: '20px', 
                    backgroundColor: '#ffffff',
                    color: '#56042C'
                }}
                variant="contained"
                onClick={async () => {
                    await localStorage.setItem('token', '');
                    history.push('/admin/login');
                }}
            >
                Logout
            </Button>
        </div>
    )
}

export default Header;