package LeoCTD.Quetools.controller;


import LeoCTD.Quetools.entity.Categoria;

import LeoCTD.Quetools.service.impl.CategoriaService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path="/categorias")
public class CategoriaController {

    @Autowired
    private final CategoriaService service;

    private final Logger LOGGER = Logger.getLogger(CategoriaController.class);

    public CategoriaController(CategoriaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Categoria> listarCategorias(){
        LOGGER.info("peticion: listar categorias  ");
        return service.listar();

    }

    @GetMapping("/{id}")
    public Optional<Categoria> getCategoria(@PathVariable("id")Long id){
        LOGGER.info("peticion para buscar categoria id: "+id);
        return service.buscar(id);

    }
    @PostMapping
    public void guardarCategoria(@RequestBody Categoria categoria){
        LOGGER.info("peticion para guardar:  " + categoria);
        service.agregarOEditar(categoria);

    }
}
