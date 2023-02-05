import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  isUserLogged: boolean;
  loginStatus: Subject<any>;

  cartItems: any;
  productToBeAdded: Subject<any>;

  constructor(private httpClient: HttpClient) { 
    this.cartItems = [];
    this.productToBeAdded = new Subject();

    this.isUserLogged = false;
    this.loginStatus = new Subject();
  }

  showProducts(){
    return this.httpClient.get('/showAllProducts');
  }

  getEmployee(employee: any) {
    return this.httpClient.get("/getEmployee/" + employee.emailId + "/" + employee.password).toPromise();
  }

  getAllEmployees(): any {
    return this.httpClient.get('/getAllEmployees');
  }

  deleteEmployee(employee: any) {
    return this.httpClient.delete('/deleteEmployee/' + employee.empId);
  }

  getEmployeeById(empId:any){
    return this.httpClient.get('/getEmpById/' + empId);
  }

  deleteProductById(prodId:any){
    return this.httpClient.delete('/deleteById/' + prodId);
  }

  updateEmployee(employee: any) {
    return this.httpClient.put('/updateEmployee', employee);
  }

  getAllDepartments(): any {
    return this.httpClient.get('/getAllDepartments');
  }

  registerEmployee(employee: any): any {
    return this.httpClient.post('/registerEmployee', employee);
  }
  getAllCountries(): any {
    return this.httpClient.get('https://restcountries.com/v3.1/all');
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.productToBeAdded.next(product);
  }

  getCartStatus(): any {
    return this.productToBeAdded.asObservable();
  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setUserLoggedIn() {
    this.isUserLogged = true;
    this.loginStatus.next(this.isUserLogged);
  }
  setUserLoggedOut() {
    this.isUserLogged = false;
    this.loginStatus.next(this.isUserLogged);
  }
  getUserLogged() {
    return this.isUserLogged;
  }
}
