package LeoCTD.Quetools.service.impl;

import LeoCTD.Quetools.dto.ArtEntradaDto;
import LeoCTD.Quetools.dto.ArtSalidaDto;
import LeoCTD.Quetools.entity.Articulo;
import LeoCTD.Quetools.repository.IArticuloRepository;

import LeoCTD.Quetools.service.IArticuloService;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticuloService implements IArticuloService<Articulo> {

    @Autowired
    IArticuloRepository repository;
    private final ObjectMapper mapper;

    private final Logger LOGGER = Logger.getLogger(ArticuloService.class);
    @Autowired
    public ArticuloService(ObjectMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public List<Articulo> listar() {
        LOGGER.info("buscando todos los articulos ");
        return repository.findAll();
    }

    @Override
    public ArtSalidaDto agregarOEditar(Articulo articulo) {

        LOGGER.info("agregando articulo: " + articulo);
        Articulo art = repository.save(articulo);

        return mapper.convertValue(art, ArtSalidaDto.class);
    }

    @Override
    public void eliminar(Long id) {
        Optional<Articulo> articulo = repository.findById(id);
        //if(articulo !== null){
            LOGGER.info("eliminando articulo id: " + id);
            repository.deleteById(id);
       // }else{
       //     LOGGER.info("el articulo no existe");
      //  }

    }

    @Override
    public ArtSalidaDto buscar(Long id) {
        LOGGER.info("buscando articulo id: " + id);
        Articulo vuelta = repository.findById(id).get();
        System.out.println(vuelta);
        return mapper.convertValue(vuelta, ArtSalidaDto.class);

    }
}
