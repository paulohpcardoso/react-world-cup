import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Header from '../../components/Header/Header';

const Estadios = () => {

    const history = useHistory();
    const [estadios, setEstadios] = useState([]);

    useEffect(() => {
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

        fetchData();
    }, [])

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div>
                <Typography variant="h4" style={{ padding: '10px' }}>Estadios</Typography>
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
        </div>
    )
}

export default Estadios;