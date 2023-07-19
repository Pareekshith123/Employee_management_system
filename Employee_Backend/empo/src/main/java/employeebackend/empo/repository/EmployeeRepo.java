package employeebackend.empo.repository;

import employeebackend.empo.Entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<EmployeeEntity,Integer>{
}
