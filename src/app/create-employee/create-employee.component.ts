import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employees: Employees = new Employees();
  constructor( private employeeservice: EmployeesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeservice.createEmployee(this.employees).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
    
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employee']);

  }


  onSubmit(){
    console.log(this.employees);
    this.saveEmployee();
  }

}
