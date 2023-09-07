
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { Auth1LoginComponent } from './auth1-login/auth1-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    Auth1LoginComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
