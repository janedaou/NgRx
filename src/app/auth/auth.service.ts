import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiEndpoint}/login`;
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => {
        // Handle successful response
        return response;
      }),
      catchError(error => {
        // Handle error response
        return throwError(error);
      })
    );
  }

  signup(email: string, password: string): Observable<any> {
    const url = `${this.apiEndpoint}/signup`;
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => {
        // Handle successful response
        return response;
      }),
      catchError(error => {
        // Handle error response
        return throwError(error);
      })
    );
  }
}
