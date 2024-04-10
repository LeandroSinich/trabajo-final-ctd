import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { BusquedaContext } from '../context/BusquedaContext';
import { useContext } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { CarritoContext } from '../context/CarritoContext';
import { Badge, Button } from '@mui/material';
import { LoginContext } from '../context/LoginContext';
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));





export default function SearchAppBar() {

    const { setValue } = useLocalStorage('busqueda', '')
    const navigate = useNavigate()
    const { agregarBusqueda } = useContext(BusquedaContext)
    const { carritoLista } = useContext(CarritoContext)
    const { login, reset } = useContext(LoginContext)
    

    const handleSubmit = (e) => {

        if (e.key === 'Enter') {
            setValue(e.target.value)
            agregarBusqueda(e.target.value)
            navigate('/busqueda/' + e.target.value)

        } else {
            return
        }
    }

    const handleCuenta = () => {

        navigate('/cuenta')

    }
    const handleSesion = () => {
        reset()
        navigate('/blanco')
    }
    useEffect(() => {
      
    }, [login])
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>

                    <Typography
                        variant="h5"
                        noWrap
                        component="h1"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <NavLink className="navbar-brand" to='/'>
                            <b>Qtools</b>
                        </NavLink>

                    </Typography>

                    <Box display='flex'>
                        <NavLink className="nav-link" to="/maquinas">
                            <Typography variant="h7" m='10px'>Maquinas</Typography>
                        </NavLink>
                        <NavLink className="nav-link" to="/herramientas">
                            <Typography variant="h7" m='10px'>Herramientas</Typography>
                        </NavLink>
                        <NavLink className="nav-link" to="/andamios">
                            <Typography variant="h7" m='10px'>Andamios</Typography>
                        </NavLink>
                        <NavLink className="nav-link" to="/otros">
                            <Typography variant="h7" m='10px'>Otros</Typography>
                        </NavLink>

                    </Box>
                    <Search onKeyDown={handleSubmit} >

                        <SearchIconWrapper >

                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <NavLink to='/carrito'>
                        <div style={{ margin: '20px' }}>
                            <Badge badgeContent={carritoLista.length} color="secondary" >
                                <ShoppingCart color="action" />
                            </Badge>
                        </div>
                    </NavLink>
                    {login.login ?
                        <Button color='neutral' variant="plain" onClick={handleCuenta}>
                            Tu cuenta
                        </Button>
                        :
                        <Button color='neutral' variant="plain" onClick={handleSesion}>
                            Iniciar Sesión
                        </Button>

                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
}
