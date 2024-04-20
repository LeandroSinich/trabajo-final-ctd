package LeoCTD.Quetools.dto;

import LeoCTD.Quetools.entity.Rol;

import java.sql.Date;

public record UsuarioEntradaDto(String nombre, String apellido, String email, String password, Date fecha_creacion, Rol rol) {
}
