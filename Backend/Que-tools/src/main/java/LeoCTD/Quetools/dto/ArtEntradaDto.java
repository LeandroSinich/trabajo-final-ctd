package LeoCTD.Quetools.dto;

import LeoCTD.Quetools.entity.Categoria;

public record ArtEntradaDto(String nombre, String funcion, String descripcion, String imagen, Double costo, Categoria categoria) {
}
