import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, Validators,FormBuilder}from '@angular/forms'
import { AuthService, LoginInfo} from '../../services/auth.service'
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  errorMessage;
  public form: FormGroup;
  data: LoginInfo = {} as LoginInfo;
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService, private cookieService: CookieService) {    
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: [this.data.username, Validators.compose([Validators.required])],
      password: [this.data.password, Validators.compose([Validators.required])]
    });
  }
  onSubmit() {
    this.authservice.Login(this.data).subscribe(rs=>{
      console.log(rs);
      this.errorMessage='';
      // save user into cookie
      this.cookieService.set("userInfo", JSON.stringify(rs));
      this.authservice.setLoggedIn(true);
      //redirect to home
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(this.errorMessage);
        this.errorMessage = "Wrong username or password";
    });
  }
 }

