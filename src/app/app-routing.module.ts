import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { EmployeeComponent } from './employee/employee.component';
import { GetemployeebyidComponent } from './getemployeebyid/getemployeebyid.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',canActivate:[AuthGuard],component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'showemp',canActivate:[AuthGuard],component:EmployeeComponent},
  {path:'products',canActivate:[AuthGuard],component:GridComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'getempbyid',canActivate:[AuthGuard],component:GetemployeebyidComponent},
  {path:'logout',canActivate:[AuthGuard],component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
