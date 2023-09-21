 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
{
  component:AuthLoginComponent,
  path:'app-auth-login'
},
{
  component:AuthLoginComponent,
  path:'app-auth1-login'
},
{
  component:RegisterFormComponent,
  path:'app-register-form'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
