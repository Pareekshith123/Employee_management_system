import axios from'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/empo/create"
const EMPLOYEE_API_BASE_URL_get = "http://localhost:8080/api/empo/getall"
const EMPLOYEE_API_BASE_URL_del = "http://localhost:8080/api/empo/delete"
class EmployeeService{
 saveEmployee(employee){
    return axios.post(EMPLOYEE_API_BASE_URL,employee);
}
getEmployees(){
    return axios.get(EMPLOYEE_API_BASE_URL_get)
}
deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL_del}/${id}`);
  }
}
export default new EmployeeService();