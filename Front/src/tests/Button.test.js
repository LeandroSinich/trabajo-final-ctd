import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CarritoContext } from '../context/CarritoContext';
import { Button } from '../componentes/Button';
import '@testing-library/jest-dom'

describe('Button', () => {
    it('debe renderizar el boton "Agregar" cuando no esta el item en el carritoLista', () => {
        const mockAgregarArticulo = jest.fn();
        const mockCarritoLista = [];
        const { getByText } = render(
            <CarritoContext.Provider value={{ carritoLista: mockCarritoLista, agregarArticulo: mockAgregarArticulo }}>
                <Button articulo={{ id: 1 }} />
            </CarritoContext.Provider>
        );
        const agregarButton = getByText('Agregar');
        expect(agregarButton).toBeInTheDocument();
    });

    it('debe llamar a agregarArticulo cuando el boton "Agregar" es clickeado', () => {
        const mockAgregarArticulo = jest.fn();
        const mockCarritoLista = [];
        const { getByText } = render(
            <CarritoContext.Provider value={{ carritoLista: mockCarritoLista, agregarArticulo: mockAgregarArticulo }}>
                <Button articulo={{ id: 1 }} />
            </CarritoContext.Provider>
        );
        const agregarButton = getByText('Agregar');
        fireEvent.click(agregarButton);
        expect(mockAgregarArticulo).toHaveBeenCalledTimes(1);
    });

    it('debe renderizar el boton "Quitar" cuando no esta el item en el carritoLista', () => {
        const mockEliminarArticulo = jest.fn();
        const mockCarritoLista = [{ id: 1 }];
        const { getByText } = render(
            <CarritoContext.Provider value={{ carritoLista: mockCarritoLista, eliminarArticulo: mockEliminarArticulo }}>
                <Button articulo={{ id: 1 }} />
            </CarritoContext.Provider>
        );
        const quitarButton = getByText('Quitar');
        expect(quitarButton).toBeInTheDocument();
    });

    it('debe llamar a agregarArticulo cuando el boton "Quitar" es clickeado', () => {
        const mockEliminarArticulo = jest.fn();
        const mockCarritoLista = [{ id: 1 }];
        const { getByText } = render(
            <CarritoContext.Provider value={{ carritoLista: mockCarritoLista, eliminarArticulo: mockEliminarArticulo }}>
                <Button articulo={{ id: 1 }} />
            </CarritoContext.Provider>
        );
        const quitarButton = getByText('Quitar');
        fireEvent.click(quitarButton);
        expect(mockEliminarArticulo).toHaveBeenCalledTimes(1);
    });
});
