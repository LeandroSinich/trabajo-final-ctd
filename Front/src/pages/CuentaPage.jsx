import * as React from 'react';
import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import AddCardIcon from '@mui/icons-material/AddCard';
import Image from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import { LoginContext } from '../context/LoginContext';
import { Button } from '@mui/material';
import InicioSesion from '../componentes/InicioSesion';


export default function CuentaPage() {

    const { login } = React.useContext(LoginContext)

    return (
        <div >
            <h2 align='center' style={{marginTop:'10px'}}>Tu cuenta</h2>
            {login.login == false &&
                <InicioSesion />
            }
            {login.tipo !== 0 &&

                <div style={{marginLeft: '5%', marginTop: '10px'}}>
                    <h4><b>Usuario</b></h4>
                    <List
                        component="nav"
                        sx={{
                            maxWidth: 320,
                        }}
                    >
                        <ListItemButton>
                            <ListItemDecorator>
                                <AccountCircleIcon />
                            </ListItemDecorator>
                            Datos personales
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemDecorator>
                                <AddHomeIcon />
                            </ListItemDecorator>
                            Agregar domicilio
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemDecorator>
                                <AutoAwesomeMotionIcon />
                            </ListItemDecorator>
                            Tus alquileres
                        </ListItemButton>
                    </List>
                </div>
            }
            {login.tipo == 2 &&
                <div style={{marginLeft: '5%', marginTop: '10px'}}>
                    <h4><b>Productos</b></h4>
                    <List
                        component="nav"
                        sx={{
                            maxWidth: 320,
                        }}
                    >
                        <ListItemButton>
                            <ListItemDecorator>
                                <AddCardIcon />
                            </ListItemDecorator>
                            Agregar nuevo producto
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemDecorator>
                                <DeleteIcon />
                            </ListItemDecorator>
                            Eliminar un producto
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemDecorator>
                                <ArtTrackIcon />
                            </ListItemDecorator>
                            Editar producto
                        </ListItemButton>
                    </List>
                </div>
            }
        </div>
    );
}

