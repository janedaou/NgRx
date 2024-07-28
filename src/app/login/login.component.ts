import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
