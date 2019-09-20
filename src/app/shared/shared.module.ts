import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators,
    NgxBootstrapModule
  ],
  exports: [
    CommonModule, //préparation de la factorisation du CommonModule
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators,
    NgxBootstrapModule
  ]
})
export class SharedModule { }
