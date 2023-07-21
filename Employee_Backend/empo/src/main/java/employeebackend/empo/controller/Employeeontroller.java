package employeebackend.empo.controller;

import employeebackend.empo.Entity.EmployeeEntity;
import employeebackend.empo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empo")
@CrossOrigin(origins = "http://localhost:3000")
public class Employeeontroller {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/create")
    public ResponseEntity<EmployeeEntity> createEmployee(@RequestBody EmployeeEntity employeeEntity){
        try{
            EmployeeEntity employee = this.employeeService.createEmployee(employeeEntity);
           return ResponseEntity.ok(employee);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @GetMapping("/getall")
    public ResponseEntity<List<EmployeeEntity>> getAllemployees(){
        try{
            List<EmployeeEntity> allEmployees = this.employeeService.getAllEmployees();
            return ResponseEntity.ok(allEmployees);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
}
