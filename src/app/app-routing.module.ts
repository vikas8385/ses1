// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';

const routes: Routes = [
{
  component:AuthLoginComponent,
  path:'app-auth-login'
},
{
  component:AuthLoginComponent,
  path:'app-auth1-login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
