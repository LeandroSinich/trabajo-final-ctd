package LeoCTD.Qtools.service.impl;

import LeoCTD.Qtools.entity.Usuario;
import LeoCTD.Qtools.service.IUsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService implements IUsuarioService {
    @Override
    public List<Usuario> listarUsuarios() {
        return null;
    }

    @Override
    public boolean agregarUsuario(Usuario usuario) {
        return false;
    }

    @Override
    public boolean editarUsuario(Usuario usuario) {
        return false;
    }

    @Override
    public boolean eliminarUsuario(int id) {
        return false;
    }
}
