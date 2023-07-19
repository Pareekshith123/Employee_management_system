package employeebackend.empo.service;

import employeebackend.empo.Entity.EmployeeEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {
    public EmployeeEntity createEmployee(EmployeeEntity employeeEntity);
    public EmployeeEntity updateEmployee(Integer id ,EmployeeEntity employeeEntity);
    public List<EmployeeEntity> getAllEmployees();
    public EmployeeEntity getEmployeeById(Integer id);
    public void delete(Integer id);
}
