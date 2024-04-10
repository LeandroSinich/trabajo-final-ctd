import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

export default function InicioSesion() {
    const [open, setOpen] = React.useState(false);
    const [usuarios, setUsuarios] = React.useState([])
    const [usuario, setUser] = useState({ email: '', password: '' })
    const { login, iniciarSesion, iniciarSesionOffLine } = useContext(LoginContext)
    const navigate = useNavigate()
    

    const handleOlvidarPassword = () => {
        alert('Revisa tu casilla para recuperar la contraseña ')
    }

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/usuarios')
            const data = await response.json()
            setUsuarios(data)

        } catch (error) {
            console.error(error)
        }
    }

    const comprobacionDatos = () => {
        const user = usuarios.find(us => us.email === usuario.email && us.password === usuario.password)
        if (user) {

            iniciarSesion(user)

        } else {
            alert('Email y/o contraseña enválido/s')
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    useEffect(() => {
        if(login.login == false && login.nombre !== 'OFF-LINE'){
            setOpen(true)            
        }
    }, [])


    const handleChangeEmail = (e) => {
        setUser({ ...usuario, email: e.target.value })

    }

    const handleChangePassword = (e) => {
        setUser({ ...usuario, password: e.target.value })

    }
    const handleClose = () =>{
        setOpen(false)
        if(login.login == false){
            iniciarSesionOffLine()
        }
        
        navigate('/')
    }

    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                        align='center'
                    >
                        Iniciar Sesión
                    </Typography>
                    <hr />
                    {login.login ?
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={1}
                            align='center'
                        >
                            Bienvenido/a, {login.nombre}
                        </Typography>
                        :
                        <>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder="Ej: user@Qtools.com" onChange={handleChangeEmail} />

                            </FormControl>
                            <FormControl>
                                <FormLabel>Contraseña</FormLabel>
                                <Input placeholder="Ingresa tu contraseña" type='password' onChange={handleChangePassword} />
                                <Button color='secondary' onClick={handleOlvidarPassword}>olvide mi contraseña</Button>
                            </FormControl>
                            <hr />
                            <div
                                style={{ margin: '10px' }}
                                align='center'
                            >
                                <Button color='primary' onClick={comprobacionDatos}>Ingresar</Button>
                            </div>
                            <div align='center'>
                                <Button color='secondary' onClick={handleClose}>Continuar sin sesión</Button>
                            </div>
                        </>

                    }
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}

