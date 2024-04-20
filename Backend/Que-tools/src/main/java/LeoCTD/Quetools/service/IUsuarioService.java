package LeoCTD.Quetools.service;

import LeoCTD.Quetools.dto.UsuarioSalidaDto;
import LeoCTD.Quetools.entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface IUsuarioService<Usuario> {

    List<Usuario> listar();
    void agregarOEditar(Usuario usuario);

    void eliminar(Long id);

    UsuarioSalidaDto buscar(Long id);
}
