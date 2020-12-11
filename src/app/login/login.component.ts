import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../authorize.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  response: any;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private authService: AuthorizeService,
              private router: Router) { }

  login(): any {
    this.authService.login(this.form.controls.username.value, this.form.controls.password.value)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        // if (response.status === '200') {
        //   this.router.navigate(['/main']);
        // }
      });
    this.router.navigate(['/main', 'content', 'map']);
  }

  ngOnInit(): void {

  }

}
