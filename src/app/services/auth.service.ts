import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {AuthInfo} from "../models/auth-info";

export interface LoginData {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>({} as AuthInfo);

  constructor(private http: HttpClient) {
    this.http.get<AuthInfo>('/api/auth/this').subscribe(req => {
      this.authInfo$.next(req);
    })
  }

  login(data: LoginData) {
    const params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password
      }
    });

    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post('/api/auth/login', params.toString(), {
      headers: myHeaders,
      responseType: 'text' as const
    }).subscribe( () =>
      this.http.get<AuthInfo>('/api/auth/this').subscribe(req => {
        this.authInfo$.next(req);
      })
    );
  }

  logout() {
    this.http.get<void>('/api/auth/logout').subscribe( () =>
      this.http.get<AuthInfo>('/api/auth/this').subscribe(req => {
        this.authInfo$.next(req);
      }))
  }
}
