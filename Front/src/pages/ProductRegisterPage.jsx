import { Button, FormControl, FormHelperText, FormLabel, Input, Modal, Option, Select, Sheet, Textarea, Typography } from '@mui/joy'
import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductRegisterPage = () => {

    const [producto, setProducto] = useState({
        nombre: "",
        funcion: "",
        descripcion: "",
        imagen: "",
        costo: 0,
        categorias_idcategorias: 0
    })
    const [exito, setExito] = useState(false)
    const navigate = useNavigate()
    const url = 'http://localhost:8080/articulos'


    const handleNombre = (e) => {
        setProducto({ ...producto, nombre: e.target.value })
    }
    const handleFuncion = (e) => {
        setProducto({ ...producto, funcion: e.target.value })
    }
    const handleDescripcion = (e) => {
        setProducto({ ...producto, descripcion: e.target.value })
    }
    const handleImagen = (e) => {
        setProducto({ ...producto, imagen: e.target.value })
    }
    const handleCosto = (e) => {
        setProducto({ ...producto, costo: e.target.value })
    }
    const handleCategoria = (e) => {

        switch (e.target.innerText) {
            case 'Herramienta':

                return setProducto({ ...producto, categorias_idcategorias: 1 })

            case 'Andamio':

                return setProducto({ ...producto, categorias_idcategorias: 2 })
            case 'Máquina':

                return setProducto({ ...producto, categorias_idcategorias: 3 })
            case 'Otra':

                return setProducto({ ...producto, categorias_idcategorias: 4 })
            default:
                return
        }
    }


    const handleSubmit = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            console.log(response)
             setExito(true)

        } catch (error) {
            console.log('error:' + error)
        }
    }
    const handleClose = () =>{
        setExito(false)
        navigate('/')
    }
    return (
        <>
            <h2 align='center' style={{

                marginTop: '2%'
            }}>Registro de Producto</h2>
            <div
                align='center'

            >
                <Box
                    sx={{
                        maxWidth: 500,
                        border: '2px',

                        borderRadius: 'md',
                        p: 2,
                        boxShadow: 'lg',

                    }}
                >
                    <FormControl >
                        <FormLabel >Nombre</FormLabel>
                        <Input placeholder="Nombre del producto" onChange={handleNombre} />

                    </FormControl>
                    <FormControl sx={{ marginTop: '10px' }}>
                        <FormLabel>Categoría</FormLabel>
                        <Select placeholder="Elije una categoría" onChange={handleCategoria}>
                            <Option value='Máquina'>Máquina</Option>
                            <Option value='Herramienta'>Herramienta</Option>
                            <Option value='Andamio'>Andamio</Option>
                            <Option value='Otra'>Otra</Option>
                        </Select>
                        <hr />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Función</FormLabel>
                        <Textarea minRows={2} placeholder="Describa la funcionalidad del producto" onChange={handleFuncion} />                        
                        <FormHelperText>255 caracteres máximo</FormHelperText>

                    </FormControl>
                    <FormControl sx={{ marginTop: '10px' }}>
                        <FormLabel>Descripción</FormLabel>
                        <Textarea minRows={4} placeholder="Describa la principales características del producto" onChange={handleDescripcion} />                        
                        <FormHelperText>255 caracteres máximo</FormHelperText>
                        <hr />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Precio</FormLabel>
                        <Input placeholder="EJ: 4500" onChange={handleCosto} />
                        <FormHelperText>Precio unitario por día de alquiler en pesos</FormHelperText>

                    </FormControl>
                    <FormControl sx={{ marginTop: '10px' }}>
                        <FormLabel>Imagen</FormLabel>
                        <Input placeholder="link de la imagen del producto" onChange={handleImagen} />
                        <hr />
                    </FormControl>
                </Box>
            </div>
            <div align='center' style={{ marginBottom: '10px' }}>
                <Button onClick={handleSubmit}>Agregar Producto</Button>
            </div>
            {exito &&
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={exito}
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
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={1}
                            align='center'
                        >
                         El producto '{producto.nombre}' ha sido agregado con éxito.
                        </Typography>
                    </Sheet>
                </Modal>
            }
        </>
    )
}
