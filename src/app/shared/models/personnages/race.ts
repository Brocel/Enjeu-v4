export class Race {
  name: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'; //nom de la race
  readonly minTaille: number; //taille minimum de l'individu en metres
  readonly maxTaille: number; //taille max de l'individu en metres
  readonly minAge: number; //age minimum de l'individu en années
  readonly maxAge: number; //age max de l'individu en années
  readonly modFor: number; //modif de force
  readonly modDef: number; //modif de défense
  readonly modMass: number; //modif de masse

  //getters
  get name() {
    return this.name;
  }
  get minTaille() {
    return this.minTaille;
  }
  get maxTaille() {
    return this.maxTaille;
  }
  get minAge() {
    return this.minAge;
  }
  get maxAge() {
    return this.maxAge;
  }
  get modFor() {
    return this.modFor;
  }
  get modDef() {
    return this.modDef;
  }
  get modMass() {
    return this.modMass;
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
      this.modFor = 1;
      this.modDef = 1;
      this.modMass = 1;
    } else if (this.name=='ELFE') {
      this.minTaille = 1.3;
      this.maxTaille = 1.8;
      this.minAge = 40;
      this.maxAge = 800;
      this.modFor = 0.8;
      this.modDef = 0.8;
      this.modMass = 0.8;
    } else if (this.name=='NAIN') {
      this.minTaille = 1.1;
      this.maxTaille = 1.5;
      this.minAge = 50;
      this.maxAge = 500;
      this.modFor = 1.1;
      this.modDef = 1.4;
      this.modMass = 1.5;
    } else if (this.name=='ORC') {
      this.minTaille = 1.7;
      this.maxTaille = 2.5;
      this.minAge = 12;
      this.maxAge = 60;
      this.modFor = 1.3;
      this.modDef = 1.1;
      this.modMass = 1.2;
    } else if (this.name=='GOBELIN') {
      this.minTaille = 0.7;
      this.maxTaille = 1.3;
      this.minAge = 10;
      this.maxAge = 90;
      this.modFor = 0.8;
      this.modDef = 0.9;
      this.modMass = 1.2;
    } else {
      this.minTaille = 1;
      this.maxTaille = 3;
      this.minAge = 10;
      this.maxAge = 400;
      this.modFor = 1;
      this.modDef = 1;
      this.modMass = 1;
    };
  }
}
