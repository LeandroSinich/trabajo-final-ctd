package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Rol;
import LeoCTD.Quetools.repository.ICategoriaRepository;
import LeoCTD.Quetools.repository.IRolRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService implements IUsuarioService<Rol> {

    @Autowired
    IRolRepository repository;
    private final Logger LOGGER = Logger.getLogger(RolService.class);
    @Override
    public List<Rol> listar() {
        LOGGER.info("buscando todos los roles");
        return repository.findAll();
    }

    @Override
    public void agregarOEditar(Rol rol) {
        LOGGER.info("agregando rol: " + rol);
        repository.save(rol);
    }

    @Override
    public void eliminar(Long id) {
        LOGGER.info("eliminando rol id: " + id);
        repository.deleteById(id);
    }

    @Override
    public Optional<Rol> buscar(Long id) {
        LOGGER.info("buscando rol id: " + id);
        return repository.findById(id);
    }
}
