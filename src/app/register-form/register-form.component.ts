
import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  logininput: FormGroup
   
  constructor(private formbuilder:FormBuilder){
  this.logininput=this.formbuilder.group({
     username:[''],
     password:[''],
     confirmPassword:['']

})
  }
  onSubmit(){
    console.log(this.logininput.value)
     
  
    
  }
  

}
  