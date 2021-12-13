import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Header from '../../components/Header/Header';

const Jogadores = () => {

    const history = useHistory();
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = await localStorage.getItem('token');
            await axios.get(
                'http://localhost:4000/jogadores', 
                { headers: { Authorization: 'Bearer ' +  token } }
            )
                .then(async response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        await setJogadores(response.data);
                    }
                })
        }

        fetchData();
    }, [])

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div>
                <Typography variant="h4" style={{ padding: '10px' }}>Jogadores</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Seleção</TableCell>
                                <TableCell>Posição</TableCell>
                                <TableCell>Gols</TableCell>
                                <TableCell>Assistências</TableCell>
                                <TableCell>Cartões Amarelo</TableCell>
                                <TableCell>Cartões Vermelho</TableCell>
                                <TableCell>Impedimentos</TableCell>
                                <TableCell>Defesas</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {jogadores.map(jogador => {
                                return (
                                    <TableRow
                                        key={jogador.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {jogador.name}
                                        </TableCell>
                                        <TableCell align="left">{jogador.selecao}</TableCell>
                                        <TableCell align="left">{jogador.position}</TableCell>
                                        <TableCell align="left">{jogador.goals}</TableCell>
                                        <TableCell align="left">{jogador.assists}</TableCell>
                                        <TableCell align="left">{jogador.yellowCards}</TableCell>
                                        <TableCell align="left">{jogador.redCards}</TableCell>
                                        <TableCell align="left">{jogador.impediments}</TableCell>
                                        <TableCell align="left">{jogador.defenses}</TableCell>
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

export default Jogadores;