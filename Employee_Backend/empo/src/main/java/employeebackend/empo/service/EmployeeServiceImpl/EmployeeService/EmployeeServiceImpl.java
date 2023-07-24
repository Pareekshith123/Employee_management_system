package employeebackend.empo.service.EmployeeServiceImpl.EmployeeService;

import employeebackend.empo.Entity.EmployeeEntity;
import employeebackend.empo.repository.EmployeeRepo;
import employeebackend.empo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    Optional<EmployeeEntity> employeeOptional = this.employeeRepo.findById(id);

    if (employeeOptional.isPresent()) {
        EmployeeEntity existingEmployee = employeeOptional.get();

        // Update the fields from the input employeeEntity
        existingEmployee.setFirstName(employeeEntity.getFirstName());
        existingEmployee.setLastName(employeeEntity.getLastName());
        existingEmployee.setEmail(employeeEntity.getEmail());
        existingEmployee.setPhone(employeeEntity.getPhone());

        // Save the updated employee entity to the database
        return this.employeeRepo.save(existingEmployee);
    } else {
        return null; // For simplicity, returning null if employee not found (you may handle it differently)
    }
}


    @Override
    public List<EmployeeEntity> getAllEmployees() {
        List<EmployeeEntity> all = this.employeeRepo.findAll();
        
        return all;
    }

    @Override
    public EmployeeEntity getEmployeeById(Integer id) {
        Optional<EmployeeEntity> employeeOptional = this.employeeRepo.findById(id);
        return employeeOptional.orElse(null); // or use employeeOptional.get() if you are sure it will always have a value
    }
    

    @Override
    public void delete(Integer id) {
        this.employeeRepo.deleteById(id);
    }

}
