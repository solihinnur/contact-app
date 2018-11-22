import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KontakService } from '../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(
  private formBuilder: FormBuilder,
  private router: Router, 
  public KontakService: KontakService
  
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  async loginUser(event) {
    try {
      const target = event.target
      const username = target.querySelector('#username').value
      const password = target.querySelector('#password').value
  
      this.KontakService.getUserDetails(username, password).subscribe(async data => {
        if (data[0].username) {
          this.KontakService.setLoggedIn(true);
          return await this.router.navigate(['home']);
        } else if (success) {
          this.message = "Please check your username and password";
        }
      })
    } catch(error) {
      console.error(error);
    }
  }
}
