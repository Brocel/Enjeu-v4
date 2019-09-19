import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    AuthModule
  ]
})
export class PublicModule { }
