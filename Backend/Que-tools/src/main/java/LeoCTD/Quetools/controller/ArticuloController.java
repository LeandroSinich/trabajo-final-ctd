package LeoCTD.Quetools.controller;

import LeoCTD.Quetools.entity.Articulo;
import LeoCTD.Quetools.entity.Usuario;
import LeoCTD.Quetools.service.impl.ArticuloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/articulos")
public class ArticuloController {
    @Autowired
    private final ArticuloService service;


    public ArticuloController(ArticuloService service) {
        this.service = service;
    }

    @GetMapping
    public List<Articulo> listarArticulos(){
        return service.listar();

    }

    @GetMapping("/{id}")
    public Optional<Articulo> getArticulo(@PathVariable("id")Long id){
        return service.buscar(id);

    }
    @PostMapping
    public void guardarArticulo(@RequestBody Articulo articulo){
        service.agregarOEditar(articulo);

    }

    //@DeleteMapping("/{id}")
    //public void borrarArticulo(@PathVariable("id") Long id){
      //  service.eliminar(id);
    //}
}
