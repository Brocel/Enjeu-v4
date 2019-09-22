import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Personnage } from '../models/personnages/personnage';
import { Description } from '../models/personnages/description';
import { Job } from '../models/personnages/job';
import { Race } from '../models/personnages/race';
import { Specialty } from '../models/personnages/specialty';
import { Statistics } from '../models/personnages/statistics';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    Personnage,
    Description,
    Job,
    Race,
    Specialty,
    Statistics
  ],
  exports: [
    Personnage,
    Description,
    Job,
    Race,
    Specialty,
    Statistics
  ]
})
export class PersonnageModule { }
