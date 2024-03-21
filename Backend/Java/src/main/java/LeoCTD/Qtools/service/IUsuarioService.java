package LeoCTD.Qtools.service;

import LeoCTD.Qtools.entity.Usuario;

import java.util.List;

public interface IUsuarioService {

    List<Usuario> listarUsuarios();
    boolean agregarUsuario(Usuario usuario);
    boolean editarUsuario(Usuario usuario);
    boolean eliminarUsuario(int id);
}
