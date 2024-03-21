package LeoCTD.Quetools.repository;

import LeoCTD.Quetools.entity.Alquiler;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAlquilerRepository extends JpaRepository<Alquiler, Long> {
}
