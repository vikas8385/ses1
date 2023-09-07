
import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {
loginform: FormGroup
constructor(private formbuilder:FormBuilder){
this.loginform=this.formbuilder.group({
   username:[''],
   password:['']
})
}
onSubmit(){
  console.log(this.loginform.value)
}
 

}
 


