import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(@Inject('authV2') private auth, private router:Router) { }

  canActivate():boolean {
  if (this.auth.authenticated()) {
  	return this.auth.authenticated();
  }
  	this.router.navigate(['/problems']);
  	return false;
  }

  isAdmin():boolean {
  	return this.auth.authenticated() && this.auth.getProfile().roles.includes('admin');
  }
}
