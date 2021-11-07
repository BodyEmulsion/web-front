import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

import {BehaviorSubject} from "rxjs";
import {AuthInfo} from "./models/auth-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-front';
  public authInfo$: BehaviorSubject<AuthInfo> = this.auth.authInfo$;

  constructor(private auth: AuthService, private router: Router) {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
