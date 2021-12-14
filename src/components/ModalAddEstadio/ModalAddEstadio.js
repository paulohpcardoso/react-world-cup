import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ModalDialog = ({ open, onClose, onOk }) => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [cep, setCep] = useState('');
    const [capacity, setCapacity] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);

    return (
        <Modal
            onClose={onClose} 
            open={open}
            sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', maxHeight: '510px', marginTop: '50px'}}
        >
            <Box sx={{ width: 400, backgroundColor: '#ffffff', padding: '10px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Novo Estádio
                </Typography>

                <TextField
                    required
                    id="outlined-required"
                    label="Nome"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                        setError(false);
                    }}
                    error={error}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Cidade"
                    margin="normal"
                    fullWidth
                    value={city}
                    onChange={e => {
                        setCity(e.target.value)
                        setError(false);
                    }}
                    error={error}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="CEP"
                    margin="normal"
                    fullWidth
                    value={cep}
                    onChange={e => {
                        if (e.target.value.length <= 8) {
                            setCep(e.target.value)
                            setError(false);
                        }
                    }}
                    error={error}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Capacidade"
                    margin="normal"
                    fullWidth
                    value={capacity}
                    onChange={e => {
                        setCapacity(e.target.value)
                        setError(false);
                    }}
                    error={error}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="URL Foto"
                    margin="normal"
                    fullWidth
                    value={url}
                    onChange={e => {
                        setUrl(e.target.value)
                        setError(false);
                    }}
                    error={error}
                />

                <Button 
                    style={{ marginTop: '10px' }}
                    variant="contained" 
                    fullWidth
                    onClick={async() => {
                        if (name !== '' && city !== '' && cep !== '' && capacity !== '' && url !== '') {
                            const token = await localStorage.getItem('token');
                            await axios.post(
                                'http://localhost:4000/estadios/register', 
                                { name, city, zipcode: cep, capacity: parseInt(capacity), url }, 
                                { headers: { Authorization: 'Bearer ' + token }})
                                .then(async response => {
                                    if (response.status === 200) {
                                        onOk();
                                    } else {
                                        await setError(true);
                                    }
                                })
                        } else {
                            await setError(true);
                        }
                    }}
                >
                    Salvar
                </Button>

            </Box>
        </Modal>
    )
};

export default ModalDialog;