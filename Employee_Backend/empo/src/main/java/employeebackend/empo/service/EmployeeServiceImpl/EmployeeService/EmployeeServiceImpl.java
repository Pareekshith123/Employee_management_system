package employeebackend.empo.service.EmployeeServiceImpl.EmployeeService;

import employeebackend.empo.Entity.EmployeeEntity;
import employeebackend.empo.repository.EmployeeRepo;
import employeebackend.empo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService
{
    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public EmployeeEntity createEmployee(EmployeeEntity employeeEntity){
        EmployeeEntity save = this.employeeRepo.save(employeeEntity);
        return save;
    }

    @Override
    public EmployeeEntity updateEmployee(Integer id, EmployeeEntity employeeEntity) {

    return null;
    }

    @Override
    public List<EmployeeEntity> getAllEmployees() {
        List<EmployeeEntity> all = this.employeeRepo.findAll();
        return all;
    }

    @Override
    public EmployeeEntity getEmployeeById(Integer id) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
