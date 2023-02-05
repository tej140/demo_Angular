import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

declare var jQuery:  any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent  implements OnInit{
  
  employees:any
  
      emailId: any;
      employee: any;
      retreivedData: any;
      editObject:any;
      countries:any;
      
    constructor(private service:EmpService){
  
      this.editObject={empId: '',empName:'',salary: '',gender:'',doj: '',emailId:'',password:''};
      //   this.employees = [
      //   {empId: 1,empName:'Harsha',salary: 4545.45,gender:'Male',doj: '10-13-2018',country:'IND',emailId:'harsha@gmail.com',password:'password'},
      //   {empId: 2,empName:'Pasha',salary: 3434.34,gender:'Male',doj: '11-15-2014',country:'IND',emailId:'pasha@gmail.com',password:'password'},
      //   {empId: 3,empName:'Deepika',salary: 1234.34,gender:'Female',doj: '12-18-2012',country:'IND',emailId:'deepika@gmail.com',password:'password'},
      //   {empId: 4,empName:'Indira',salary: 6767.67,gender:'Female',doj: '08-20-2015',country:'IND',emailId:'indira@gmail.com',password:'password'},
      //   {empId: 5,empName:'Venu',salary: 6543.21,gender:'Male',doj: '09-23-2020',country:'IND',emailId:'venu@gmail.com',password:'password'}
      // ];
        // localStorage.setItem('employees', JSON.stringify(this.employees) );
    }
    ngOnInit(): void {
        this.retreivedData = localStorage.getItem('employee');
        this.employee = JSON.parse(this.retreivedData);
        this.emailId = this.employee.emailId;
  
      this.service.getAllCountries().subscribe((data:any)=>{this.countries=data;});
      this.service.getAllEmployees().subscribe((data:any)=>{this.employees=data;});
    }
    showUser() {
   
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