import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, SigninComponent, SignupComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
