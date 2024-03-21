package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Articulo;
import LeoCTD.Quetools.repository.IArticuloRepository;
import LeoCTD.Quetools.repository.IUsuarioRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticuloService implements IUsuarioService<Articulo> {

    @Autowired
    IArticuloRepository repository;
    @Override
    public List<Articulo> listar() {
        return repository.findAll();
    }

    @Override
    public void agregarOEditar(Articulo articulo) {
        repository.save(articulo);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Articulo> buscar(Long id) {

        return repository.findById(id);
    }
}
