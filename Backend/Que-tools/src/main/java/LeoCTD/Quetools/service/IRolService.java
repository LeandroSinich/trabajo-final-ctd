package LeoCTD.Quetools.service;

import java.util.List;

public interface IRolService<Rol> {
    List<Rol> listar();
    void agregarOEditar(Rol rol);

    void eliminar(Long id);

    Rol buscar(Long id);

}
