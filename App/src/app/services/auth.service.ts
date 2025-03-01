import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, Message } from '../models/employee.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth/login/employee';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, { email, password });
  }

  logout(): void {
    sessionStorage.removeItem('jwt');
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('jwt');
  }

  saveToken(token: string): void {
    sessionStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwt');
  }

  isAdmin = false;


  resetPassword(token: string, newPassword: string): Observable<Message>{
    const message: Message = {
      message: "Password reset successfully"
    };
    return of(message);
  }

}
