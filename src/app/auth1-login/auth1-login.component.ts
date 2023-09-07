import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';

@Component({
  selector: 'app-auth1-login',
  templateUrl: './auth1-login.component.html',
  styleUrls: ['./auth1-login.component.css']
})
export class Auth1LoginComponent {
  logininput: FormGroup
constructor(private formbuilder:FormBuilder){
this.logininput=this.formbuilder.group({
   username:[''],
   password:['']
})
}
onSubmit(){
  console.log(this.logininput.value)
}
}
