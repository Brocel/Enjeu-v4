import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableJeuComponent } from './table-jeu/table-jeu/table-jeu.component';
import { AuthGuardService } from '../core/services/auth-guard.service';


const routes: Routes = [
  { path: 'protected/table-jeu', canActivate: [AuthGuardService],component: TableJeuComponent }, // on fait correspondre la route tablejeu au composant table-jeu
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
