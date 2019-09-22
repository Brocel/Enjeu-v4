import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Personnage } from '../../shared/models/personnages/personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {

  personnages: Personnage[] = [];
  personnagesSubject = new Subject<Personnage[]>();

  constructor() { }

  emitPersonnages() {
    this.personnagesSubject.next(this.personnages);
  }

  savePersonnages() {
    //todo mongo db
  }
}
