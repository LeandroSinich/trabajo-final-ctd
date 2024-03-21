package LeoCTD.Qtools.controller;

import LeoCTD.Qtools.entity.Usuario;
import LeoCTD.Qtools.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private IUsuarioService iUsuarioService;

    @Autowired
    public UsuarioController(IUsuarioService iUsuarioService) {
        this.iUsuarioService = iUsuarioService;
    }
    @GetMapping
    public List<Usuario> listarUsuarios(){
        return iUsuarioService.listarUsuarios();

    }
}
