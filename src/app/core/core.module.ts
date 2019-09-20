import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { HttpClientModule } from  '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
//import * as firebase from 'firebase';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class CoreModule {}
