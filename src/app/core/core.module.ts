import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';

import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


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
export class CoreModule {
  //Importer le core uniquement dans app.module
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   if (parentModule) {
    throw new Error('CoreModule is already loaded.');
   }
  }
}
