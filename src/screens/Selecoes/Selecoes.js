import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import Header from '../../components/Header/Header';
import ModalAddSelecao from '../../components/ModalAddSelecao/ModalAddSelecao';

const Selecoes = () => {

    const history = useHistory();
    const [selecoes, setSelecoes] = useState([]);
    const [modal, setModal] = useState(false);

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
    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant="h4" style={{ padding: '10px' }}>Seleções</Typography>
                    <Button 
                        variant="text" 
                        onClick={() => setModal(true)}
                    >
                        Adicionar Seleção
                    </Button>
                </div>
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

            <ModalAddSelecao 
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

export default Selecoes;