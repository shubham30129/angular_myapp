import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  userLoged = localStorage.getItem('username');
  constructor(private  router: Router) { }

  ngOnInit() {
  }
  logout() {
   localStorage.removeItem('username');
    this.router.navigate(['login']);
  }
}
