import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  logininput: FormGroup
  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private formbuilder:FormBuilder,private http:HttpClient){
  this.logininput=this.formbuilder.group({
     username:[''],
     password:[''],
     confirmPassword:['']
  })
  }
   
  onSubmit(){
    console.log(this.logininput.value)
    this.getMethod();
    this.postMethod();
  
    
  }
  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe();
     // console.log(this.logininput.value);
    //this.getJsonValue=this.logininput.value;
    
  
  }
  public postMethod(){
     
    this.http.post('https://jsonplaceholder.typicode.com/posts',{}).subscribe();
     // console.log(this.logininput.value);
    //this.getJsonValue=this.logininput.value;
    
  
  }
   

}
