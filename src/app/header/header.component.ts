import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;
  cartItems: any;

  constructor(private service: EmpService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });

    this.service.getCartStatus().subscribe((data: any) => {
      this.cartItems.push(data);
    });
  }
}