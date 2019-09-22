export class Statistics {
  taille: number;
  mass: number;
  age: number;
  for: number;
  def: number;
  int: number;

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
    //todo mass en fction de Taille
    //todo age en fonction de Race
    this.for = 10;
    this.def = 10;
    this.int = 10;
  }
}
