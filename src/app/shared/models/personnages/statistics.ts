import { PersonnageModule } from '../../modules/personnage.module';

export class Statistics extends Race {
  taille: number; // taille de l'individu en metres
  mass: number; // masse en kg
  age: number; // age en années
  for: number; //force physique
  def: number; // résistance physique
  int: number; // intelligence
  // récupérés de race.ts
  minTaille: number = race.theMinTaille;
  maxTaille: number = race.theMaxTaille;
  minAge: number = race.theMinAge;
  maxAge: number = race.theMaxAge;
  mulForRace: number = race.theMulFor;
  mulDefRace: number = race.theMulDef;
  mulMass: number = race.theMulMass;

  //getters
  get theTaille() {
    return this.taille;
  }
  get theMass() {
    return this.mass;
  }
  get theAge() {
    return this.age;
  }
  get theFor() {
    return this.for;
  }
  get theDef() {
    return this.def;
  }
  get theInt() {
    return this.int;
  }

  constructor() {
    //todo taille en fction de Race
    this.taille = Math.random() * (this.maxTaille - this.minTaille) + this.minTaille;
    //todo mass en fction de Taille
    this.mass = this.taille  * this.mulMass * 100 / 3;
    //todo age en fonction de Race
    this.age = Math.random() * (this.maxAge - this.minAge) + this.minAge;
    this.for = 10;
    this.def = 10;
    this.int = 10;
  }
}
