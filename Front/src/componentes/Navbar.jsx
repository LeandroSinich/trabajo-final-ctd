import React, { useContext, useEffect } from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'
import SearchAppBar from './AppBar';

export const Navbar = () => {

    const { carritoLista } = useContext(CarritoContext)



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Q-Tools</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/maquinas">Maquinas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/herramientas">Herramientas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/andamios">Andamios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/otros">Otros</NavLink>
                        </li>
                    </ul>
                    <SearchAppBar>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchAppBar>
                    <NavLink to='/carrito'>
                        <Badge badgeContent={carritoLista.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}
