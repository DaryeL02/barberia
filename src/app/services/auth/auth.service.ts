import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/users/user.model';
// import { map } from 'rxjs/operators';
// import { BaseResponse } from 'src/app/models/base-response.model';
// import { SignInDto } from 'src/app/models/users/sign-in.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userBehaviorSubject: BehaviorSubject<User | null>;
  public userObservable: Observable<User | null>;
  private tokenBehaviorSubject: BehaviorSubject<string | null>;
  public tokenObservable: Observable<string | null>;

  constructor(private httpClient: HttpClient, private router: Router) {
    const userStr = localStorage.getItem(environment.localStorageItemName);
    const user = userStr ? JSON.parse(userStr) : null;
    this.userBehaviorSubject = new BehaviorSubject<User | null>(user);
    this.userObservable = this.userBehaviorSubject.asObservable();
    const token = user?.token;
    this.tokenBehaviorSubject = new BehaviorSubject<string | null>(token);
    this.tokenObservable = this.tokenBehaviorSubject.asObservable();
  }

  public get user(): User | null {
    const userStr = localStorage.getItem(environment.localStorageItemName);
    const user = userStr ? JSON.parse(userStr) : null;
    return user;
  }

  public setUser(user: User | null): void {
    localStorage.setItem(
      environment.localStorageItemName,
      user ? JSON.stringify(user) : ''
    );
    this.userBehaviorSubject.next(user);
  }

  public get token(): string | null {
    const userStr = localStorage.getItem(environment.localStorageItemName);
    const user = userStr ? JSON.parse(userStr) : null;
    const token = user?.token ?? null;
    return token;
  }

  public setToken(token: string | null): void {
    this.tokenBehaviorSubject.next(token);
  }

//   signIn(signInDto: SignInDto): Observable<User | null> {
//     const url = `${environment.api.main}Users/sign-in`;
//     return this.httpClient.post<BaseResponse<User>>(url, signInDto).pipe(
//       map((response) => {
//         if (response.statusCode !== 200) {
//           return null;
//         }
//         const user = response.result;
//         this.setUser(user);
//         this.setToken(user?.token ?? null);
//         return user;
//       })
//     );
//   }

  signOut(): void {
    localStorage.removeItem(environment.localStorageItemName);
    this.userBehaviorSubject.next(null);
    this.tokenBehaviorSubject.next(null);
    this.router.navigate([`/authentication/login`]);
  }
}
