package LeoCTD.Quetools.service;

import LeoCTD.Quetools.dto.ArtEntradaDto;
import LeoCTD.Quetools.dto.ArtSalidaDto;

import java.util.List;

public interface IArticuloService<Articulo> {
    List<Articulo> listar();
    ArtSalidaDto agregarOEditar(Articulo articulo);

    void eliminar(Long id);

    ArtSalidaDto buscar(Long id);
}
