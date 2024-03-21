package LeoCTD.Quetools.entity;

import jakarta.persistence.*;

import java.sql.Date;
@Entity
@Table(name = "articulos")
public class Articulo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true,nullable = false)
    private String nombre;
    private String funcion;
    private String descripcion;
    @Column(nullable = false)
    private String imagen;
    private Double costo;
    @Column(nullable = false)
    private Long categorias_idcategorias;

    public Articulo(Long id, String nombre, String funcion, String descripcion, String imagen, Double costo, Long categorias_idcategorias) {
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

    public Long getCategorias_idcategorias() {
        return categorias_idcategorias;
    }

    public void setCategorias_idcategorias(Long categorias_idcategorias) {
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


