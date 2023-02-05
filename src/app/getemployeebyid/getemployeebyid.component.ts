import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

declare var jQuery:  any;
@Component({
  selector: 'app-getemployeebyid',
  templateUrl: './getemployeebyid.component.html',
  styleUrls: ['./getemployeebyid.component.css']
})
export class GetemployeebyidComponent {
  employees: any[];
  empId : number;
  employee : any;
  editObject:any;
  countries: any;
  constructor(private service:EmpService) {
    this.editObject={empId: '',empName:'',salary: '',gender:'',doj: '',emailId:'',password:''};
  this.empId = 0;
  this.employees = this.service.getAllEmployees().subscribe((data:any)=>{this.employees=data;});
  }
  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data:any)=>{this.countries=data;});
  }
  showEmployee() {
    this.service.getEmployeeById(this.empId).subscribe((data: any) => {this.employee = data;});
  }
  editEmployee(emp: any) {
    //alert('Edit Employee');
    console.log('Edit Employee');
    console.log(emp);
    this.editObject = emp;

    jQuery('#empModal').modal('show');
  }

  updateEmployee() {
    console.log(this.editObject);
    this.service.updateEmployee(this.editObject).subscribe((result: any) => {console.log(result);});
  }
  deleteEmployee(emp: any) {
    alert('Delete Employee');
    console.log('Delete Employee');
    console.log(emp);

    this.service.deleteEmployee(emp).subscribe((result: any) => {console.log(result)});

    const i = this.employees.findIndex((element: any) => {
      return emp.empId === element.empId;
    });
    this.employees.splice(i, 1);
  }
  }
