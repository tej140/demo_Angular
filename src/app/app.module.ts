import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { StudentComponent } from './student/student.component';
import { AgePipe } from './age.pipe';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './grid/grid.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { GetemployeebyidComponent } from './getemployeebyid/getemployeebyid.component';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    LoginComponent,
    EmployeeComponent,
    ExpPipe,
    GenderPipe,
    StudentComponent,
    AgePipe,
    RegisterComponent,
    HeaderComponent,
    GridComponent,
    CartComponent,
    LogoutComponent,
    GetemployeebyidComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
