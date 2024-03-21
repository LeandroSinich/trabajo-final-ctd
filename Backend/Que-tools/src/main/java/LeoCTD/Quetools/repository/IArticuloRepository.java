package LeoCTD.Quetools.repository;

import LeoCTD.Quetools.entity.Articulo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IArticuloRepository extends JpaRepository<Articulo, Long> {
}
