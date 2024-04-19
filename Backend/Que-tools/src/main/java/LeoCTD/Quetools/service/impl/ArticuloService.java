package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Articulo;
import LeoCTD.Quetools.repository.IArticuloRepository;
import LeoCTD.Quetools.repository.IUsuarioRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticuloService implements IUsuarioService<Articulo> {

    @Autowired
    IArticuloRepository repository;
    private final Logger LOGGER = Logger.getLogger(ArticuloService.class);
    @Override
    public List<Articulo> listar() {
        LOGGER.info("buscando todos los articulos ");
        return repository.findAll();
    }

    @Override
    public void agregarOEditar(Articulo articulo) {
        LOGGER.info("agregando articulo: " + articulo);
        repository.save(articulo);
    }

    @Override
    public void eliminar(Long id) {
        LOGGER.info("eliminando articulo id: " + id);
        repository.deleteById(id);
    }

    @Override
    public Optional<Articulo> buscar(Long id) {
        LOGGER.info("buscando articulo id: " + id);
        return repository.findById(id);
    }
}
