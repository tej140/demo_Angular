import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  cartItems:any;
  constructor(private service : EmpService, private router: Router){
    // this.cartItems=this.service.cartItems;
    localStorage.clear();
    localStorage.removeItem('employees');
    localStorage.removeItem('employee');
    localStorage.removeItem('cartItems');
    this.service.setUserLoggedOut();
    this.router.navigate(['']);
    
  }

  ngOnInit(): void {
    
  }
}