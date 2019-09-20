import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableJeuComponent } from './table-jeu/table-jeu.component';


const routes: Routes = [
  { path: 'table-jeu', component: TableJeuComponent }, // on fait correspondre la route tablejeu au composant table-jeu
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
