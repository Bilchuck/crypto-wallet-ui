import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  logginPage: boolean;
  userName: string;

  constructor(private router: Router) {
  }

  
  ngOnInit () {
    this.userName = localStorage.getItem('login')
    this.logginPage = this.router.url === 'login' 
  }

  signOut() {
    localStorage.removeItem('login')
    this.router.navigate(['login'])
  }
}
