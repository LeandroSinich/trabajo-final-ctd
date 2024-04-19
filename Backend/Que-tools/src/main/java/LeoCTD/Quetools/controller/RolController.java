package LeoCTD.Quetools.controller;


import LeoCTD.Quetools.entity.Rol;

import LeoCTD.Quetools.service.impl.RolService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path="/roles")
public class RolController {
    @Autowired
    private final RolService service;
    private final Logger LOGGER = Logger.getLogger(RolController.class);

    public RolController(RolService service) {
        this.service = service;
    }

    @GetMapping
    public List<Rol> listarRoles(){
        LOGGER.info("peticion: listar roles ");
        return service.listar();

    }

    @GetMapping("/{id}")
    public Optional<Rol> getRol(@PathVariable("id")Long id){
        LOGGER.info("peticion para buscar rol id: "+id);
        return service.buscar(id);

    }
    @PostMapping
    public void guardarRol(@RequestBody Rol rol){
        LOGGER.info("peticion para guardar:  " + rol);
        service.agregarOEditar(rol);

    }
}
