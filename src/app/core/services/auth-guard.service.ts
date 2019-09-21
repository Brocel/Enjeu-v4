import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {  }

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean>
}
