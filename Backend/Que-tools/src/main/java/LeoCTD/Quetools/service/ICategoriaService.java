package LeoCTD.Quetools.service;



import LeoCTD.Quetools.entity.Categoria;

import java.util.List;

public interface ICategoriaService<Categoria> {
    List<Categoria> listar();
    void agregarOEditar(Categoria categoria);

    void eliminar(Long id);

   Categoria buscar(Long id);
}
