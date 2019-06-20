import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        const rolesPermissions = {
          ROLE_SECRETARIA: ['persona', 'familia', 'inscripcion'],
          ROLE_INSTRUCTOR: ['curso'],
          ROLE_DIRECTOR: ['curso', 'carrera', 'instructor', 'red', 'JornadaSeccion', 'unidadAcademica']
        };

        const domain = state.url.slice(1, state.url.indexOf('/', 2));
        if (currentUser) {
          if (currentUser.role === 'ROLE_ADMIN') {
            return true;
          }
          return rolesPermissions[currentUser.role].indexOf(domain) >= 0;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}