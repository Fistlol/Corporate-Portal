import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../authorize.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  response: any;

  constructor(private http: HttpClient, private authServise: AuthorizeService, private router: Router) { }

  login(): any {
    this.authServise.login(this.username, this.password)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        // if (response.status === '200') {
        //   this.router.navigate(['/main']);
        // }
      });
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
  }

}
