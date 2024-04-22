package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.dto.ArtEntradaDto;
import LeoCTD.Quetools.dto.ArtSalidaDto;
import LeoCTD.Quetools.entity.Articulo;
import LeoCTD.Quetools.entity.Categoria;
import LeoCTD.Quetools.service.IArticuloService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@ActiveProfiles("test")
class ArticuloServiceTest {

    @Autowired
    IArticuloService articuloService;

    @Test
    void QueListeDosArticulosPreviamenteCreados() {
        ArtEntradaDto artEntradaDto = new ArtEntradaDto("art1", "funcion del articulo",
                "descripcion del articulo", "url de la imagen", 1111D, null);
        ArtEntradaDto artEntradaDto2 = new ArtEntradaDto("art2", "funcion del articulo2",
                "descripcion del articulo2", "url de la imagen2", 2222D, null);
         articuloService.agregarOEditar(artEntradaDto);
         articuloService.agregarOEditar(artEntradaDto2);
        List<Articulo> lista = articuloService.listar();

        assertNotNull(lista);
        assertEquals(2, lista.size());
    }

    @Test
    void queAgregueCorrectamenteUnArticulo() {

        ArtEntradaDto artEntradaDto = new ArtEntradaDto("art1", "funcion del articulo",
                "descripcion del articulo", "url de la imagen", 1111D, null);
        ArtSalidaDto artSalidaDto = articuloService.agregarOEditar(artEntradaDto);

        assertNotNull(artSalidaDto);
        assertNotNull(artSalidaDto.getId());
        assertEquals(1L, artSalidaDto.getId());
        assertEquals("art1", artSalidaDto.getNombre());
        assertEquals("funcion del articulo", artSalidaDto.getFuncion());
        assertEquals("descripcion del articulo", artSalidaDto.getDescripcion());
        assertEquals("url de la imagen", artSalidaDto.getImagen());
        assertEquals(1111D, artSalidaDto.getCosto());
        assertNull(artSalidaDto.getCategoria());
    }

    @Test
    void queElimineArticuloCorrectamente() {
        ArtEntradaDto artEntradaDto = new ArtEntradaDto("art1", "funcion del articulo",
                "descripcion del articulo", "url de la imagen", 1111D, null);
        ArtSalidaDto artSalidaDto = articuloService.agregarOEditar(artEntradaDto);
        assertNotNull(artSalidaDto);
        assertNotNull(artSalidaDto.getId());
        assertEquals(1,articuloService.listar().toArray().length);
        Long id = artSalidaDto.getId();
        articuloService.eliminar(id);
        assertEquals(0,articuloService.listar().toArray().length);
    }

    @Test
    void queBusqueDosArticulosCorrectamente() {
        ArtEntradaDto artEntradaDto = new ArtEntradaDto("art1", "funcion del articulo",
                "descripcion del articulo", "url de la imagen", 1111D, null);
        ArtEntradaDto artEntradaDto2 = new ArtEntradaDto("art2", "funcion del articulo2",
                "descripcion del articulo2", "url de la imagen2", 2222D, null);

        articuloService.agregarOEditar(artEntradaDto);
        articuloService.agregarOEditar(artEntradaDto2);

        ArtSalidaDto busqueda1 = articuloService.buscar(1L);
        ArtSalidaDto busqueda2 = articuloService.buscar(2L);

        assertNotNull(busqueda1);
        assertNotNull(busqueda1.getId());
        assertEquals(1L, busqueda1.getId());
        assertEquals("art1", busqueda1.getNombre());
        assertEquals("funcion del articulo", busqueda1.getFuncion());
        assertEquals("descripcion del articulo", busqueda1.getDescripcion());
        assertEquals("url de la imagen", busqueda1.getImagen());
        assertEquals(1111D, busqueda1.getCosto());

        assertNotNull(busqueda2);
        assertNotNull(busqueda2.getId());
        assertEquals(2L, busqueda2.getId());
        assertEquals("art2", busqueda2.getNombre());
        assertEquals("funcion del articulo2", busqueda2.getFuncion());
        assertEquals("descripcion del articulo2", busqueda2.getDescripcion());
        assertEquals("url de la imagen2", busqueda2.getImagen());
        assertEquals(2222D, busqueda2.getCosto());

    }
}