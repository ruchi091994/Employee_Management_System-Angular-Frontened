import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employee:Employees[];
  constructor( private employeeService: EmployeesService,
    private router: Router) { }

  ngOnInit(): void 
  {
    this.getEmployees();
  }
    private getEmployees()  {
      this.employeeService.getEmployeeList().subscribe(data => { this.employee = data;});
    }
  
  employeeDetails(id: number){
      this.router.navigate(['employee-details', id]);
    }

  updateEmployee(id: number){
    this.router.navigate(['update-employees', id]); 
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

} 
