import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { TableJeuModule } from './table-jeu/table-jeu.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    TableJeuModule
  ]
})
export class ProtectedModule { }
