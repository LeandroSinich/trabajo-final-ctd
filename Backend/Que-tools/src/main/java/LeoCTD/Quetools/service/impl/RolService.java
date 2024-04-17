package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Rol;
import LeoCTD.Quetools.repository.ICategoriaRepository;
import LeoCTD.Quetools.repository.IRolRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService implements IUsuarioService<Rol> {

    @Autowired
    IRolRepository repository;
    @Override
    public List<Rol> listar() {
        return repository.findAll();
    }

    @Override
    public void agregarOEditar(Rol rol) {
        repository.save(rol);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Rol> buscar(Long id) {
        return repository.findById(id);
    }
}
