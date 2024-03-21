package LeoCTD.Qtools.entity;

import java.sql.Date;

public class Usuario {
    private int id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private Date fecha_creacion;
    private int roles_idroles;

    public Usuario(int id, String nombre, String apellido, String email, String password, Date fecha_creacion, int roles_idroles) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.fecha_creacion = fecha_creacion;
        this.roles_idroles = roles_idroles;
    }

    public Usuario() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(Date fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public int getRoles_idroles() {
        return roles_idroles;
    }

    public void setRoles_idroles(int roles_idroles) {
        this.roles_idroles = roles_idroles;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", fecha_creacion=" + fecha_creacion +
                ", roles_idroles=" + roles_idroles +
                '}';
    }
}
