import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBar from '../componentes/AppBar';
import { BusquedaContext } from '../context/BusquedaContext';
import { CarritoContext } from '../context/CarritoContext';
import { LoginContext } from '../context/LoginContext';
import '@testing-library/jest-dom'

describe('SearchAppBar component', () => {
  test('renderiza links and handles correctamente', () => {
    const agregarBusqueda = jest.fn();
    const reset = jest.fn();

    render(
      <Router>
        <LoginContext.Provider value={{ login: { login: true }, reset }}>
          <CarritoContext.Provider value={{ carritoLista: [] }}>
            <BusquedaContext.Provider value={{ agregarBusqueda }}>
              <AppBar />
            </BusquedaContext.Provider>
          </CarritoContext.Provider>
        </LoginContext.Provider>
      </Router>
    );

    // Test de links
    expect(screen.getByText('Maquinas')).toBeInTheDocument();
    expect(screen.getByText('Herramientas')).toBeInTheDocument();
    expect(screen.getByText('Andamios')).toBeInTheDocument();
    expect(screen.getByText('Otros')).toBeInTheDocument();

    // Test de search 
    const searchInput = screen.getByPlaceholderText('Search…');
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    expect(agregarBusqueda).toHaveBeenCalled();

    // Test boton "Tu cuenta" cuando el usuario esta logueado
    const cuentaButton = screen.getByText('Tu cuenta');
    userEvent.click(cuentaButton);
    expect(reset).not.toHaveBeenCalled();

    // Test boton "Iniciar Sesión" el usuario no esta logueado
    render(
      <Router>
        <LoginContext.Provider value={{ login: { login: false }, reset }}>
          <CarritoContext.Provider value={{ carritoLista: [] }}>
            <BusquedaContext.Provider value={{ agregarBusqueda }}>
              <AppBar />
            </BusquedaContext.Provider>
          </CarritoContext.Provider>
        </LoginContext.Provider>
      </Router>
    );

    const iniciarSesionButton = screen.getByText('Iniciar Sesión');
    userEvent.click(iniciarSesionButton);
    expect(reset).toHaveBeenCalled();
  });
});
