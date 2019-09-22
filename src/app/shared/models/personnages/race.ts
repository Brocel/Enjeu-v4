export class Race {
  name: String; //nom de la race
  readonly minTaille: number; //taille minimum de l'individu en metres
  readonly maxTaille: number; //taille max de l'individu en metres
  readonly minAge: number; //age minimum de l'individu en années
  readonly maxAge: number; //age max de l'individu en années
  readonly mulFor: number; //multiplicateur de force
  readonly mulDef: number; //multiplicateur de défense
  readonly mulMass: number; //multiplicateur de masse

  //getters
  get theName() {
    return this.name;
  }
  get theMinTaille() {
    return this.minTaille;
  }
  get theMaxTaille() {
    return this.maxTaille;
  }
  get theMinAge() {
    return this.minAge;
  }
  get theMaxAge() {
    return this.maxAge;
  }
  get theMulFor() {
    return this.mulFor;
  }
  get theMulDef() {
    return this.mulDef;
  }
  get theMulMass() {
    return this.mulMass;
  }

  constructor(
    name: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>
  )
  {
    this.name = name || ['HUMAIN'];
    //Construction des propriétés de la race
    if (this.name==['HUMAIN']) {
      this.minTaille = 1,4;
      this.maxTaille = 2.1;
      this.minAge = 15;
      this.maxAge = 100;
      this.mulFor = 
    }
  }
}
