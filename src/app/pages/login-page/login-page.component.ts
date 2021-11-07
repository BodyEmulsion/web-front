import { Component, OnInit } from '@angular/core';
import {AuthService, LoginData} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login: string = '';
  public password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  enter() {
    this.auth.login({username: this.login, password: this.password} as LoginData);
    this.router.navigateByUrl('/');
  }
}
