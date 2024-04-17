package LeoCTD.Quetools.entity.test;

import LeoCTD.Quetools.entity.Usuario;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UsuarioTest {
    Usuario user = new Usuario();

    @Test
    void getNombre() {
        user.setNombre("Nombre");
        assertEquals("Nombre", user.getNombre());

    }

    @Test
    void getApellido() {
        user.setApellido("Apellido");
        assertEquals("Apellido", user.getApellido());
    }

    @Test
    void getEmail() {
        user.setEmail("@email.com");
        assertEquals("@email.com", user.getEmail());
    }

    @Test
    void getPassword() {
        user.setPassword("password");
        assertEquals("password", user.getPassword());
    }

}