import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
//Solo para test
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/app/models/users/user.model';

@Component({
  selector: 'app-side-login',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    const rawValue = this.form.getRawValue();
    const user = new User()
    user.name = rawValue.username
    user.token = uuidv4()
    this.authService.setUser(user)
    this.authService.setToken(user.token);
    this.router.navigate(['/']);
  }
}
