import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Personnage } from '../models/personnages/personnage';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    Personnage
  ],
  exports: [
    Personnage
  ]
})
export class PersonnageModule { }
