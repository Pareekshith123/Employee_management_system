
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmployeeList from './Component/EmployeeList';
import AddEmployee from './Component/AddEmployee';
import EmployeeEdit from './Component/EmployeeEdit';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="" element={<EmployeeList/>}></Route>
       <Route path="/employeeList" element={<EmployeeList/>}></Route>
       <Route path="/addEmployee" element={<AddEmployee/>}></Route>
       <Route path="/EmployeeEdit/:id" element={<EmployeeEdit/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
