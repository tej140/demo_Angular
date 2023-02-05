import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId:any;
  password:any;
  employee:any;

  constructor(private service:EmpService,private router:Router){
   this.employee={};

  }

 ngOnInit(): void {}

 async submitForm(loginForm: any) {

   console.log(loginForm);
   // localStorage.setItem('employee',JSON.stringify(this.employee));

   await this.service.getEmployee(loginForm).then((data: any) => {this.employee = data; console.log(data);});
   localStorage.setItem('employee',JSON.stringify(this.employee));
   if (this.employee != null) {
     alert('Successfully LoggedIn...');
     this.service.setUserLoggedIn();
     this.router.navigate(['showemp']);
   } else {
     alert('Invalid Credentials!!!');
     this.router.navigate(['login']);
   }
 }

 loginSubmit() {
   if(this.emailId == 'HR' && this.password == 'HR') {
     alert('Login Success');
   } else {
     alert('Login Failed...');
   }
 }
 

}