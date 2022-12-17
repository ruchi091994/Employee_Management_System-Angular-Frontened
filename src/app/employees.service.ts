import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './employees';
import { Observable } from 'rxjs';

//Angular App is client
// components - we define properties and method in the components which will link to html templates. 
//services - we write common logics and we inject inject services in required components using angula dependancy injection.

//holds all the restprime codes. and we use angular dependancy injection to inject services in various components
// it communicates with server using restapi's. it uses internally  httpclient module to restapi calls.

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  [x: string]: any;

  private baseURL = "http://localhost:8070/api/v1/employees";

  constructor(private httpClient: HttpClient) {  }

  getEmployeeList(): Observable<Employees[]>  { 
    return this.httpClient.get<Employees[]>(`${this.baseURL}`);
  }

  createEmployee(employees: Employees):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, employees)
  }

  getEmployeebyId(id: number): Observable<Employees> {
    return this.httpClient.get<Employees>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employees: Employees) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employees);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
