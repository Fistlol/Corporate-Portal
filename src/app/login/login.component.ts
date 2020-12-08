import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  response: any;
  constructor(private http: HttpClient) { }

  login(): any {
    this.http.get('http://anticor.idet.kz/crimeWebAPI/User/Login?' + this.username + '=' + this.password)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    });
  }

  ngOnInit(): void {
  }

}
