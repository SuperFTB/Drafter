import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  Validators,
  FormBuilder } from '@angular/forms';

import { FormControl } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user.model';
import { Option } from '../models/option.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { T } from '@angular/core/src/render3';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  user:User; 
  emailError:Boolean = false;
  passwordError:Boolean = false;
  missingFields:Boolean = false;
  correctEmailError:Boolean = false;
  usernameError: Boolean = false;
  registerForm:FormGroup;
  name:FormControl;
  surname:FormControl;
  username:FormControl;
  email:FormControl;
  password:FormControl;

  constructor(private registerService: RegisterService, private router:Router) { }

  ngOnInit() {
    this.
      registerForm = new FormGroup({
        name: new FormControl('',Validators.required),
        surname: new FormControl('',Validators.required),
        username: new FormControl('',Validators.required),
        email: new FormControl('',[ 
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") 
      ]),
        password: new FormControl('',[
          Validators.minLength(8), 
          Validators.required])
    });
  }

  onSubmit(registerForm){
    this.user = new User();
    
    this.user.setName(this.registerForm.value.name);
    this.user.setSurname(this.registerForm.value.surname);
    this.user.setUsername(this.registerForm.value.username);
    this.user.setEmail(this.registerForm.value.email);
    this.user.setPassword(this.registerForm.value.password);
   
    this.registerService.saveUser(this.user).subscribe((res:any) =>{
      this.router.navigate(['/home/'])
    }, error => {

      switch (error.status) {
        case 509:
          this.correctEmailError = false;
          this.missingFields=false;
          this.emailError=true;
          this.passwordError=true;
          this.usernameError=false;
          break;
        case 424:
          this.emailError=true;
          this.passwordError=false;
          this.missingFields=false;
          this.correctEmailError = false;
          this.usernameError=false;
          break;
        case 403:
          this.correctEmailError = false;
          this.emailError=false;
          this.missingFields=false;
          this.passwordError=true;
          this.usernameError=false;
          break;
        case 505:
          this.missingFields=true;
          this.emailError=false;
          this.passwordError=false;
          this.correctEmailError = false;
          this.usernameError=false;
          break;
        case 508:
          this.emailError=false;
          this.correctEmailError = true;
          this.passwordError=false;
          this.missingFields=false;
          this.usernameError=false;
          break;
        case 420:
          this.emailError=false;
          this.correctEmailError = false;
          this.passwordError=false;
          this.missingFields=false;
          this.usernameError=true;
          break;
        default:
          break;
      }
      

    });
    console.log(this.user);
    
  }  
}