package LeoCTD.Qtools.entity;

public class Rol {
    private int id;
    private String tipo;

    public Rol(int id, String tipo) {
        this.id = id;
        this.tipo = tipo;
    }

    public Rol() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Rol{" +
                "id=" + id +
                ", tipo='" + tipo + '\'' +
                '}';
    }
}
