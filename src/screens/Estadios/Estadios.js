import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import Header from '../../components/Header/Header';
import ModalAddEstadio from '../../components/ModalAddEstadio/ModalAddEstadio';

const Estadios = () => {

    const history = useHistory();
    const [estadios, setEstadios] = useState([]);
    const [modal, setModal] = useState(false);

    const fetchData = async () => {
        const token = await localStorage.getItem('token');
        await axios.get(
            'http://localhost:4000/estadios', 
            { headers: { Authorization: 'Bearer ' +  token } }
        )
            .then(async response => {
                if (response.status === 200) {
                    console.log(response.data);
                    await setEstadios(response.data);
                }
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant="h4" style={{ padding: '10px' }}>Estádio</Typography>
                    <Button 
                        variant="text" 
                        onClick={() => setModal(true)}
                    >
                        Adicionar Estádio
                    </Button>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Cidade</TableCell>
                                <TableCell>Capacidade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {estadios.map(estadio => {
                                return (
                                    <TableRow
                                        key={estadio.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {estadio.name}
                                        </TableCell>
                                        <TableCell align="left">{estadio.city}</TableCell>
                                        <TableCell align="left">{estadio.capacity}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <ModalAddEstadio 
                open={modal}
                onOk={async () => {
                    await fetchData();
                    setModal(false);
                }}
                onCancel={() => setModal(false)}
            />
        </div>
    )
}

export default Estadios;