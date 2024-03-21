package LeoCTD.Quetools.entity;

import jakarta.persistence.*;

import java.sql.Date;
@Entity
@Table(name = "alquileres")
public class Alquiler {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Date fecha_inicio;
    @Column(nullable = false)
    private Date fecha_finalizacion;
    @Column(nullable = false)
    private Long usuarios_idusuarios;

    public Alquiler(Long id, Date fecha_inicio, Date fecha_finalizacion, Long usuarios_idusuarios) {
        this.id = id;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.usuarios_idusuarios = usuarios_idusuarios;
    }

    public Alquiler() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(Date fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public Date getFecha_finalizacion() {
        return fecha_finalizacion;
    }

    public void setFecha_finalizacion(Date fecha_finalizacion) {
        this.fecha_finalizacion = fecha_finalizacion;
    }

    public Long getUsuarios_idusuarios() {
        return usuarios_idusuarios;
    }

    public void setUsuarios_idusuarios(Long usuarios_idusuarios) {
        this.usuarios_idusuarios = usuarios_idusuarios;
    }

    @Override
    public String toString() {
        return "Alquiler{" +
                "id=" + id +
                ", fecha_inicio=" + fecha_inicio +
                ", fecha_finalizacion=" + fecha_finalizacion +
                ", usuarios_idusuarios=" + usuarios_idusuarios +
                '}';
    }
}
