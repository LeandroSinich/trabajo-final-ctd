package LeoCTD.Quetools.controller;

import LeoCTD.Quetools.dto.ArtSalidaDto;
import LeoCTD.Quetools.dto.UsuarioSalidaDto;
import LeoCTD.Quetools.entity.Usuario;
import LeoCTD.Quetools.service.IUsuarioService;
import LeoCTD.Quetools.service.impl.UsuarioService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://q-tools.netlify.app"})
@RequestMapping(path = "/usuarios")
public class UsuarioController {

    @Autowired
    private final UsuarioService iUsuarioService;
    private final Logger LOGGER = Logger.getLogger(UsuarioController.class);

    public UsuarioController(UsuarioService iUsuarioService) {
        this.iUsuarioService = iUsuarioService;
    }


    @GetMapping
    public List<Usuario> listarUsuarios(){
        LOGGER.info("peticion: listar usuarios  ");

        return iUsuarioService.listar();

    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioSalidaDto> getUsuario(@PathVariable("id")Long id){
        LOGGER.info("peticion para buscar usuario id: "+id);
        return ResponseEntity.ok().body(iUsuarioService.buscar(id));

    }
    @PostMapping
    public void guardarUsuario(@RequestBody Usuario usuario){
        LOGGER.info("peticion para guardar:  " + usuario);
        iUsuarioService.agregarOEditar(usuario);

    }

    @DeleteMapping("/{id}")
    public void borrarUsuario(@PathVariable("id") Long id){
        LOGGER.info("peticion para borrar usuario id:  " + id);
        iUsuarioService.eliminar(id);
    }

}
