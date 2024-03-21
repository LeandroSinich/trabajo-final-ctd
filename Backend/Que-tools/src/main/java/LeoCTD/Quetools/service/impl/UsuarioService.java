package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.entity.Usuario;
import LeoCTD.Quetools.repository.IUsuarioRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService<Usuario> {

    @Autowired
    IUsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> listar() {

        return usuarioRepository.findAll();
    }

    @Override
    public void agregarOEditar(Usuario usuario) {

        usuarioRepository.save(usuario);
    }


    @Override
    public void eliminar(Long id) {
        usuarioRepository.deleteById(id);

    }

    @Override
    public Optional<Usuario> buscar(Long id){

        return usuarioRepository.findById(id);
    }
}
