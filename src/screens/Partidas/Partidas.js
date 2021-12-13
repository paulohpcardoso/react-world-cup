import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Header from '../../components/Header/Header';

const Partidas = () => {

    const history = useHistory();
    const [partidas, setPartidas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = await localStorage.getItem('token');
            await axios.get(
                'http://localhost:4000/partidas', 
                { headers: { Authorization: 'Bearer ' +  token } }
            )
                .then(async response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        await setPartidas(response.data);
                    }
                })
        }

        fetchData();
    }, [])

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div>
                <Typography variant="h4" style={{ padding: '10px' }}>Partidas</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Seleção 1</TableCell>
                                <TableCell>Gols Selecao 1</TableCell>
                                <TableCell>Seleção 2</TableCell>
                                <TableCell>Gols Selecao 2</TableCell>
                                <TableCell>Data</TableCell>
                                <TableCell>Hora</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {partidas.map(partida => {
                                return (
                                    <TableRow
                                        key={partida.sel1 + partida.sel2}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {partida.sel1}
                                        </TableCell>
                                        <TableCell align="left">{partida.goalsSel1}</TableCell>
                                        <TableCell align="left">{partida.sel2}</TableCell>
                                        <TableCell align="left">{partida.goalsSel2}</TableCell>
                                        <TableCell align="left">{moment(partida.date).format('DD-MM-YYYY')}</TableCell>
                                        <TableCell align="left">{moment(partida.date).format('HH:mm')}</TableCell>
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

export default Partidas;