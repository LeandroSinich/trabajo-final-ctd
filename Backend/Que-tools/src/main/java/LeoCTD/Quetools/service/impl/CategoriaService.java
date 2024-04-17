package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Categoria;

import LeoCTD.Quetools.repository.ICategoriaRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService implements IUsuarioService<Categoria> {

    @Autowired
    ICategoriaRepository repository;
    @Override
    public List<Categoria> listar() {
        return repository.findAll();
    }

    @Override
    public void agregarOEditar(Categoria categoria) {
        repository.save(categoria);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);

    }

    @Override
    public Optional<Categoria> buscar(Long id) {
        return repository.findById(id);
    }
}
