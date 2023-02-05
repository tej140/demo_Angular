import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  

  products: any;

  cartItems:any;

  constructor(private service :EmpService)    
   {

    this.service.showProducts().subscribe((data:any)=>{this.products=data;})
    this.cartItems = [];
  }

  ngOnInit(): void {
    
  }

  addToCart(product: any) {
    this.service.addToCart(product);

    // this.cartItems.push(product);
    // localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  deleteProduct(card: any) {
    alert('Product Deleted');
    console.log('Delete Employee');
    console.log(card);

    this.service.deleteProductById(card.productId).subscribe((result: any) => {console.log(result)});

    const i = this.products.findIndex((element: any) => {
      return card.productId === element.productId;
    });
    this.products.splice(i, 1);
  }
}
