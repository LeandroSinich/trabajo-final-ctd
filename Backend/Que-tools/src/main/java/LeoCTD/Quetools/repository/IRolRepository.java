package LeoCTD.Quetools.repository;

import LeoCTD.Quetools.entity.Rol;
import LeoCTD.Quetools.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Long> {
}
