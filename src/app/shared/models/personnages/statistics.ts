import { Race } from './race';
import { Job } from './job';
import { Specialty } from './specialty';

export class Statistics {
  readonly taille: number; // taille de l'individu en metres
  readonly mass: number; // masse en kg
  readonly age: number; // age en années
  readonly for: number; //force physique
  readonly def: number; // résistance physique
  readonly int: number; // intelligence
  race: Race;
  job: Job;
  specialty: Specialty;
  private defaultFor: number = 10;
  private defaultDef: number = 10;
  private defaultInt: number = 10;

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

  constructor(
    race: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN',
    job: 'GUERRIER'|'SAGE'|'ASSASSIN',
    specialty: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'
  )
  {
    this.race = new Race(race);
    this.job = new Job(job);
    this.specialty = new Specialty(specialty);
    //Taille (fction de Race)
    this.taille = Math.random() * (this.race.theMaxTaille - this.race.theMinTaille) + this.race.theMinTaille;
    //mass en fction de Taille et du modif de mass de race
    this.mass = this.taille * this.race.theRaceModMass * 100 / 3;
    //age en fonction de Race
    this.age = Math.random() * (this.race.theMaxAge - this.race.theMinAge) + this.race.theMinAge;
    // Force, def, int en fction de race, job et specialty
    this.for = this.defaultFor * this.race.theRaceModFor * this.job.theJobModFor * this.specialty.theSpecModFor;
    this.def = this.defaultDef * this.race.theRaceModDef * this.job.theJobModDef * this.specialty.theSpecModDef;
    this.int = this.defaultInt * this.job.theJobModInt * this.specialty.theSpecModInt;
  }

  //méthodes

}
