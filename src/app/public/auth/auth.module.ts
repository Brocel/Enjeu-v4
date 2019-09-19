import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
