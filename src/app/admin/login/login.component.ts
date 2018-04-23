import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit() {
  }

  login(f) {
    // console.log(f.value);
    this.loginService.login({ 'email': f.value.email , 'pwd': f.value.pwd});
    this.msg = localStorage.getItem('errormsg');
  }

}
