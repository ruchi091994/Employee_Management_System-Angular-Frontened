import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {
  id: number;
  employees: Employees = new Employees();
  constructor(private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployeebyId(this.id).subscribe(data => {
      this.employees = data;
    }, error => console.error(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employees).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
