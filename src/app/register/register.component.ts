import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee: any;
  countries: any;
  departments: any;

  constructor(private service: EmpService) {
    this.employee = {empId:"", empName:"", salary:"", gender:"", doj:"", country:"", emailId:"", password: "", department: {deptId: ""}};
  }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
    this.service.getAllDepartments().subscribe((data: any) => {this.departments = data;});
  }

  registerEmployee() {
    console.log(this.employee);
    this.service.registerEmployee(this.employee).subscribe((result: any) => {console.log(result);});
    alert("registration completed");
  }

}