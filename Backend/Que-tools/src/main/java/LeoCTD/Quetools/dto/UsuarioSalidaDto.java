package LeoCTD.Quetools.dto;

import LeoCTD.Quetools.entity.Rol;


import java.sql.Date;

public class UsuarioSalidaDto {
    private Long id;

    private String nombre;

    private String apellido;

    private String email;

    private Date fecha_creacion;

    private Rol rol;

    public UsuarioSalidaDto(Long id, String nombre, String apellido, String email, Date fecha_creacion, Rol rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;

        this.fecha_creacion = fecha_creacion;
        this.rol = rol;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(Date fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}
