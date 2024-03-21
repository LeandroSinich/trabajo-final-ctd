package LeoCTD.Quetools.controller;

import LeoCTD.Quetools.entity.Usuario;
import LeoCTD.Quetools.service.IUsuarioService;
import LeoCTD.Quetools.service.impl.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/usuarios")
public class UsuarioController {

    @Autowired
    private final UsuarioService iUsuarioService;

    public UsuarioController(UsuarioService iUsuarioService) {
        this.iUsuarioService = iUsuarioService;
    }


    @GetMapping
    public List<Usuario> listarUsuarios(){
        return iUsuarioService.listar();

    }

    @GetMapping("/{id}")
    public Optional<Usuario> getUsuario(@PathVariable("id")Long id){
        return iUsuarioService.buscar(id);

    }
    @PostMapping
    public void guardarUsuario(@RequestBody Usuario usuario){
        iUsuarioService.agregarOEditar(usuario);

    }

    @DeleteMapping("/{id}")
    public void borrarUsuario(@PathVariable("id") Long id){
        iUsuarioService.eliminar(id);
    }
}
