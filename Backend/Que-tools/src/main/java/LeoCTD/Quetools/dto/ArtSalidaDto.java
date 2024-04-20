package LeoCTD.Quetools.dto;

import LeoCTD.Quetools.entity.Categoria;




public class ArtSalidaDto {

    private Long id;
    private String nombre;
    private String funcion;
    private String descripcion;
    private String imagen;
    private Double costo;
    private Categoria categoria;

    public ArtSalidaDto(Long id, String nombre, String funcion, String descripcion, String imagen, Double costo, Categoria categoria) {
        this.id = id;
        this.nombre = nombre;
        this.funcion = funcion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.costo = costo;
        this.categoria = categoria;
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

    public String getFuncion() {
        return funcion;
    }

    public void setFuncion(String funcion) {
        this.funcion = funcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Double getCosto() {
        return costo;
    }

    public void setCosto(Double costo) {
        this.costo = costo;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
