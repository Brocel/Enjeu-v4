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
    name: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'
  )
  {
    this.name = name || 'HUMAIN';
    //Construction des propriétés de la race
    if (this.name=='HUMAIN') {
      this.minTaille = 1.4;
      this.maxTaille = 2.1;
      this.minAge = 15;
      this.maxAge = 100;
      this.mulFor = 1;
      this.mulDef = 1;
      this.mulMass = 1;
    } else if (this.name=='ELFE') {
      this.minTaille = 1.3;
      this.maxTaille = 1.8;
      this.minAge = 40;
      this.maxAge = 800;
      this.mulFor = 0.8;
      this.mulDef = 0.8;
      this.mulMass = 0.8;
    } else if (this.name=='NAIN') {
      this.minTaille = 1.1;
      this.maxTaille = 1.5;
      this.minAge = 50;
      this.maxAge = 500;
      this.mulFor = 1.1;
      this.mulDef = 1.4;
      this.mulMass = 1.5;
    } else if (this.name=='ORC') {
      this.minTaille = 1.7;
      this.maxTaille = 2.5;
      this.minAge = 12;
      this.maxAge = 60;
      this.mulFor = 1.3;
      this.mulDef = 1.1;
      this.mulMass = 1.2;
    } else if (this.name=='GOBELIN') {
      this.minTaille = 0.7;
      this.maxTaille = 1.3;
      this.minAge = 10;
      this.maxAge = 90;
      this.mulFor = 0.8;
      this.mulDef = 0.9;
      this.mulMass = 1.2;
    } else {
      this.minTaille = 1;
      this.maxTaille = 3;
      this.minAge = 10;
      this.maxAge = 400;
      this.mulFor = 1;
      this.mulDef = 1;
      this.mulMass = 1;
    };
  }
}
