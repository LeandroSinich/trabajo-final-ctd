package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Categoria;

import LeoCTD.Quetools.repository.ICategoriaRepository;
import LeoCTD.Quetools.service.ICategoriaService;
import LeoCTD.Quetools.service.IUsuarioService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService implements ICategoriaService<Categoria> {

    @Autowired
    ICategoriaRepository repository;
    private final Logger LOGGER = Logger.getLogger(CategoriaService.class);
    @Override
    public List<Categoria> listar() {
        LOGGER.info("buscando todas las categorias");
        return repository.findAll();
    }

    @Override
    public void agregarOEditar(Categoria categoria) {
        LOGGER.info("agregando categoria: " + categoria);
        repository.save(categoria);
    }

    @Override
    public void eliminar(Long id) {
        LOGGER.info("eliminando categoria id: " + id);
        repository.deleteById(id);

    }

    @Override
    public Categoria buscar(Long id) {
        LOGGER.info("buscando categoria id: " + id);
        return repository.findById(id).get();
    }
}
