import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Header from '../../components/Header/Header';

const Selecoes = () => {

    const history = useHistory();
    const [selecoes, setSelecoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = await localStorage.getItem('token');
            await axios.get(
                'http://localhost:4000/selecoes', 
                { headers: { Authorization: 'Bearer ' +  token } }
            )
                .then(async response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        await setSelecoes(response.data);
                    }
                })
        }

        fetchData();
    }, [])

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div>
                <Typography variant="h4" style={{ padding: '10px' }}>Seleções</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Seleção</TableCell>
                                <TableCell>Grupo</TableCell>
                                <TableCell>Pontos</TableCell>
                                <TableCell>Vitórias</TableCell>
                                <TableCell>Empates</TableCell>
                                <TableCell>Derrotas</TableCell>
                                <TableCell>Gols Sofridos</TableCell>
                                <TableCell>Gols Tomados</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selecoes.map(selecao => {
                                return (
                                    <TableRow
                                        key={selecao.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {selecao.name}
                                        </TableCell>
                                        <TableCell align="left">{selecao.group}</TableCell>
                                        <TableCell align="left">{selecao.points}</TableCell>
                                        <TableCell align="left">{selecao.victories}</TableCell>
                                        <TableCell align="left">{selecao.draws}</TableCell>
                                        <TableCell align="left">{selecao.defeats}</TableCell>
                                        <TableCell align="left">{selecao.goalsTaken}</TableCell>
                                        <TableCell align="left">{selecao.goalsPro}</TableCell>
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

export default Selecoes;