package LeoCTD.Quetools.controller;

import LeoCTD.Quetools.dto.ArtEntradaDto;
import LeoCTD.Quetools.dto.ArtSalidaDto;
import LeoCTD.Quetools.entity.Articulo;

import LeoCTD.Quetools.service.impl.ArticuloService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://q-tools.netlify.app"})
@RequestMapping(path="/articulos")

public class ArticuloController {
    @Autowired
    private final ArticuloService service;

    private final Logger LOGGER = Logger.getLogger(ArticuloController.class);

    public ArticuloController(ArticuloService service) {
        this.service = service;
    }

    @GetMapping
    public List<Articulo> listarArticulos(){
        LOGGER.info("Me llego: listar articulos  ");
        return service.listar();

    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtSalidaDto> getArticulo(@PathVariable("id")Long id){
        LOGGER.info("peticion para buscar articulo id: "+id);

        return ResponseEntity.ok().body(service.buscar(id));

    }
    @PostMapping
    public ResponseEntity<ArtSalidaDto> guardarArticulo(@RequestBody Articulo articulo){
        LOGGER.info("Me llego:  " + articulo);

        return ResponseEntity.ok().body(service.agregarOEditar(articulo));
    }

    //@DeleteMapping("/{id}")
    //public void borrarArticulo(@PathVariable("id") Long id){
     //LOGGER.info("peticion para eliminar articulo id: "+id);
      //  service.eliminar(id);
    //}
}
