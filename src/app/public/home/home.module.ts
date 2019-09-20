import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeAuthCardComponent } from './home-auth-card/home-auth-card.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeAuthCardComponent, HomeAuthComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
