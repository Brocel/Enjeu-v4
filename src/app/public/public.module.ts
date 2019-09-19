import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    AuthModule
  ]
})
export class PublicModule { }
