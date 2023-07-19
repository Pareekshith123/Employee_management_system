package employeebackend.empo.Entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="employees")
@Data
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String FirstName;
    private String LastName;
    private String Email;
    private String phone;
}
