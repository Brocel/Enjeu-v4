import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableJeuComponent } from './table-jeu/table-jeu.component';



@NgModule({
  declarations: [TableJeuComponent],
  imports: [
    SharedModule
  ]
})
export class TableJeuModule { }
