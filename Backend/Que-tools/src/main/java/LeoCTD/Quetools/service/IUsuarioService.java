package LeoCTD.Quetools.service;

import LeoCTD.Quetools.entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface IUsuarioService<T> {

    List<T> listar();
    void agregarOEditar(T t);

    void eliminar(Long id);

    Optional<T> buscar(Long id);
}
