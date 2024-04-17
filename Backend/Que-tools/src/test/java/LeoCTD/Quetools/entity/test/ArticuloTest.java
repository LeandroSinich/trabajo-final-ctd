package LeoCTD.Quetools.entity.test;

import LeoCTD.Quetools.entity.Articulo;
import LeoCTD.Quetools.entity.Categoria;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ArticuloTest {

    Categoria categoria = new Categoria(3L, "Categoria3");
    Articulo art = new Articulo(1L,"articulo1","funcion articulo...","descripcion articulo...","http://url...",1000D,categoria);
    @Test
    void getId() {
        assertEquals(1L, art.getId());
    }

    @Test
    void setId() {
        art.setId(2L);
        assertEquals(2L, art.getId());

    }

    @Test
    void getNombre() {
        assertEquals("articulo1", art.getNombre());
    }

    @Test
    void setNombre() {
        art.setNombre("Articulo2");
        assertEquals("Articulo2", art.getNombre());
    }

    @Test
    void getFuncion() {
        assertEquals("funcion articulo...", art.getFuncion());
    }

    @Test
    void setFuncion() {
        art.setFuncion("funcion2...");
        assertEquals("funcion2...", art.getFuncion());
    }

    @Test
    void getDescripcion() {
        assertEquals("descripcion articulo...", art.getDescripcion());
    }

    @Test
    void setDescripcion() {
        art.setDescripcion("descripcion2...");
        assertEquals("descripcion2...", art.getDescripcion());
    }

    @Test
    void getImagen() {
        assertEquals("http://url...", art.getImagen());
    }

    @Test
    void setImagen() {
        art.setImagen("http://url...2");
        assertEquals("http://url...2", art.getImagen());
    }

    @Test
    void getCosto() {
        assertEquals(1000D, art.getCosto());
    }

    @Test
    void setCosto() {
        art.setCosto(2000D);
        assertEquals(2000D, art.getCosto());
    }

    @Test
    void getCategoria() {

        assertEquals(categoria, art.getCategoria());
    }

    @Test
    void setCategoria() {
        Categoria categoria = new Categoria(4L,"categoria4");
        art.setCategoria(categoria);
        assertEquals(categoria, art.getCategoria());
    }
}