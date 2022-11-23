import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credential): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(API.login, credentials);
  }
}
