import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { TableJeuModule } from './table-jeu/table-jeu.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    TableJeuModule
  ]
})
export class ProtectedModule { }
