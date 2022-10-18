import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private httpClient: HttpClient) { }

  login(usuario: string, senha: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${usuario}:${senha}`)
      })
    };

    return this.httpClient.post<any>(environment.auth, null, httpOptions).pipe(tap(data => {
      localStorage.setItem('token', data.token)
    }))

  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return token !== null;
  }


  public logout() {

    const token = localStorage.removeItem('token');

  }
}
