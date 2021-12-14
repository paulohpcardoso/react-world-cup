import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ModalDialog = ({ open, onClose, onOk }) => {

    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [error, setError] = useState(false);

    return (
        <Modal
            onClose={onClose} 
            open={open}
            sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', maxHeight: '280px', marginTop: '50px'}}
        >
            <Box sx={{ width: 400, backgroundColor: '#ffffff', padding: '10px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Nova Seleção
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
                    label="Grupo"
                    margin="normal"
                    fullWidth
                    value={group}
                    onChange={e => {
                        if (e.target.value.length <= 1) {
                            setGroup(e.target.value)
                            setError(false);
                        }
                    }}
                    error={error}
                />

                <Button 
                    style={{ marginTop: '10px' }}
                    variant="contained" 
                    fullWidth
                    onClick={async() => {
                        if (name !== '' && group !== '') {
                            const token = await localStorage.getItem('token');
                            await axios.post('http://localhost:4000/selecoes/register', { name, group}, { headers: { Authorization: 'Bearer ' + token }})
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