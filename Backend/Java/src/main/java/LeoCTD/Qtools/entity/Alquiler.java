package LeoCTD.Qtools.entity;

import java.sql.Date;

public class Alquiler {

    private int id;
    private Date fecha_inicio;
    private Date fecha_finalizacion;
    private int usuarios_idusuarios;

    public Alquiler(int id, Date fecha_inicio, Date fecha_finalizacion, int usuarios_idusuarios) {
        this.id = id;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.usuarios_idusuarios = usuarios_idusuarios;
    }

    public Alquiler() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getUsuarios_idusuarios() {
        return usuarios_idusuarios;
    }

    public void setUsuarios_idusuarios(int usuarios_idusuarios) {
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
