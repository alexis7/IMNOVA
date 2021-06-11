import { OtpComponent } from './component/otp/otp.component';
import { ConsultContractsComponent } from './component/consult-contracts/consult-contracts.component';
import { CreateContractsComponent } from './component/create-contracts/create-contracts.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './component/create-user/create-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create/user', component: CreateUserComponent},
  {path: 'create/contracts', component: CreateContractsComponent},
  {path: 'consult/contracts', component: ConsultContractsComponent},
  {path: 'otp', component: OtpComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
