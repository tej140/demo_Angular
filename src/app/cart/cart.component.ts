
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;

  constructor(private service: EmpService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.cartItems = this.service.cartItems;
  }

  showCartItems() {

    // this.retrievedData = localStorage.getItem('cartItems');
    // this.cartItems = JSON.parse(this.retrievedData);
  }
}
