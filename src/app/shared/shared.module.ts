import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { PersonnageModule } from './modules/personnage.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    PersonnageModule
  ],
  exports: [
    CommonModule, //préparation de la factorisation du CommonModule
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule
  ]
})
export class SharedModule { }
