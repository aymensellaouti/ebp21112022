import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { LoginResponse } from '../dto/login-response.dto';
import { Router } from '@angular/router';
import { ROUTES } from '../../config/routes.config';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response: LoginResponse) => {
        localStorage.setItem('token', response.id);
        this.router.navigate([ROUTES.cv]);
      },
      error: (error: Error) => {
        console.log(error);
        this.toastr.error(`Veuillez vérifier vos credentials`);
      },
    });
  }
}
