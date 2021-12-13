import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material'
import Header from '../../components/Header/Header';

const Dashboard = () => {

    const history = useHistory();

    return (
        <div style={{ width: '98.5%', height: '100%' }}>
            <Header />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    alignContent: 'center',
                    height: '80vh',
                    width: '100vw'
                }}
            >
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '35vw',
                        marginBottom: '20px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button 
                        style={{ height: '100px', width: '200px', backgroundColor: '#56042C', }}
                        variant="contained"
                        onClick={() => history.push('/admin/selecoes')}
                    >
                        Seleções
                    </Button>

                    <Button 
                        style={{ height: '100px', width: '200px', backgroundColor: '#56042C', }}
                        variant="contained"
                        onClick={() => history.push('/admin/jogadores')}
                    >
                        Jogadores
                    </Button>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '35vw',
                        marginBottom: '20px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button 
                        style={{ height: '100px', width: '200px', backgroundColor: '#56042C', }}
                        variant="contained"
                        onClick={() => history.push('/admin/estadios')}
                    >
                        Estádios
                    </Button>

                    <Button 
                        style={{ height: '100px', width: '200px', backgroundColor: '#56042C', }}
                        variant="contained"
                        onClick={() => history.push('/admin/partidas')}
                    >
                        Partidas
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;