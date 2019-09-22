import { Race } from './race';

let race = new Race;
let minTaille: number = race.theMinTaille();
let maxTaille: number = race.theMaxTaille();
let minAge: number = race.theMinAge();
let maxAge: number = race.theMaxAge();
let mulForRace: number = race.theMulFor();
let mulDefRace: number = race.theMulDef();
let mulMass: number = race.theMulMass();

export class Statistics {
  taille: number; // taille de l'individu en metres
  mass: number; // masse en kg
  age: number; // age en années
  for: number; //force physique
  def: number; // résistance physique
  int: number; // intelligence

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
    this.taille = Math.random() * (maxTaille - minTaille) + minTaille;
    //todo mass en fction de Taille
    this.mass = this.taille  * mulMass * 100 / 3;
    //todo age en fonction de Race
    this.age = Math.random() * (maxAge - minAge) + minAge;
    this.for = 10;
    this.def = 10;
    this.int = 10;
  }
}
