/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanLoad {
    TAG = AuthLoginGuard.name;

    constructor(private authService: AuthService, private router: Router) {}

    canLoad(): Observable<boolean> {
        return this.authService.tokenObservable.pipe(
            // filter((val) => val !== null), // Filter out initial Behaviour subject value
            take(1), // Otherwise the Observable doesn't complete!
            map((token) => {
                if (token) {
                    this.router.navigate(['/dashboard'], { replaceUrl: true });
                    return false;
                } else {
                    return true;
                }
            })
        );
    }
}
