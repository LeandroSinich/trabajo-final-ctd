package LeoCTD.Qtools.entity;

import java.sql.Date;

public class Articulo {
    private int id;
    private String nombre;
    private String funcion;
    private String descripcion;
    private String imagen;
    private Double costo;
    private int categorias_idcategorias;

    public Articulo(int id, String nombre, String funcion, String descripcion, String imagen, Double costo, int categorias_idcategorias) {
        this.id = id;
        this.nombre = nombre;
        this.funcion = funcion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.costo = costo;
        this.categorias_idcategorias = categorias_idcategorias;
    }

    public Articulo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getCategorias_idcategorias() {
        return categorias_idcategorias;
    }

    public void setCategorias_idcategorias(int categorias_idcategorias) {
        this.categorias_idcategorias = categorias_idcategorias;
    }

    @Override
    public String toString() {
        return "Articulo{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", funcion='" + funcion + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", imagen='" + imagen + '\'' +
                ", costo=" + costo +
                ", categorias_idcategorias=" + categorias_idcategorias +
                '}';
    }
}


