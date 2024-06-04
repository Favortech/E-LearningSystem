import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const guardGuard: CanMatchFn = (route, segments) => {
 const router = inject(Router);
 const auth = inject(AuthService);

if (auth.isLoggedIn)
{
  return true;
}
  return router.createUrlTree(['/login']);
};
