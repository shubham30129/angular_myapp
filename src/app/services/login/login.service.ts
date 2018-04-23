import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {CrudService} from '../../crud.service';

@Injectable()
export class LoginService {
  constructor(public http: HttpClient , private router: Router , private crudService: CrudService) { }
  login(loginData) {
    return this.http.post(this.crudService.path + '/login', loginData).subscribe(
      (result) => {
          if (result) {
            localStorage.setItem('username', result['email']);
            localStorage.setItem('userid', result['id']);
            this.router.navigate(['home']);
          } else {
              localStorage.setItem('errormsg', 'Invalid Email or Password');
          }
      }
    );
  }
}
