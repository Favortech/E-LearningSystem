import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
  loginType = 'student';

  changeLoginType(type: string) {
    this.loginType = type;
  }
  
  studentLoginForm = new FormGroup({
    // Student login form fields
  });
  
  instructorLoginForm = new FormGroup({
    // Instructor login form fields
  });
  
}
