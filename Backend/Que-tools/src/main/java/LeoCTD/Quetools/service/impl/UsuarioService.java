package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.dto.UsuarioSalidaDto;
import LeoCTD.Quetools.entity.Usuario;
import LeoCTD.Quetools.repository.IUsuarioRepository;
import LeoCTD.Quetools.service.IUsuarioService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService<Usuario> {

    @Autowired
    IUsuarioRepository usuarioRepository;
    private final ObjectMapper mapper;
    private final Logger LOGGER = Logger.getLogger(UsuarioService.class);

    public UsuarioService(ObjectMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public List<Usuario> listar() {
        LOGGER.info("buscando todos los usuarios");
        return usuarioRepository.findAll();
    }

    @Override
    public void agregarOEditar(Usuario usuario) {
        LOGGER.info("agregando usuario: " + usuario);
        usuarioRepository.save(usuario);
    }


    @Override
    public void eliminar(Long id) {
        LOGGER.info("eliminando usuario id: " + id);
        usuarioRepository.deleteById(id);

    }

    @Override
    public UsuarioSalidaDto buscar(Long id){
        LOGGER.info("buscando usuario id: " + id);
        UsuarioSalidaDto usuario = mapper.convertValue(usuarioRepository.findById(id).get(),UsuarioSalidaDto.class);
        return usuario;
    }
}
