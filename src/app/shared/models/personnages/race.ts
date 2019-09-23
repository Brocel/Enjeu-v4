export class Race {
  raceName: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'; //nom de la race
  readonly minTaille: number; //taille minimum de l'individu en metres
  readonly maxTaille: number; //taille max de l'individu en metres
  readonly minAge: number; //age minimum de l'individu en années
  readonly maxAge: number; //age max de l'individu en années
  readonly raceModFor: number; //raceModif de force
  readonly raceModDef: number; //raceModif de défense
  readonly raceModMass: number; //raceModif de masse

  //getters
  get theRaceName() {
    return this.raceName;
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
  get theRaceModFor() {
    return this.raceModFor;
  }
  get theRaceModDef() {
    return this.raceModDef;
  }
  get theRaceModMass() {
    return this.raceModMass;
  }

  constructor(
    race: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'
  )
  {
    this.raceName = name || 'HUMAIN';
    //Construction des propriétés de la race
    if (this.raceName=='HUMAIN') {
      this.minTaille = 1.4;
      this.maxTaille = 2.1;
      this.minAge = 15;
      this.maxAge = 100;
      this.raceModFor = 1;
      this.raceModDef = 1;
      this.raceModMass = 1;
    } else if (this.raceName=='ELFE') {
      this.minTaille = 1.3;
      this.maxTaille = 1.8;
      this.minAge = 40;
      this.maxAge = 800;
      this.raceModFor = 0.8;
      this.raceModDef = 0.8;
      this.raceModMass = 0.8;
    } else if (this.raceName=='NAIN') {
      this.minTaille = 1.1;
      this.maxTaille = 1.5;
      this.minAge = 50;
      this.maxAge = 500;
      this.raceModFor = 1.1;
      this.raceModDef = 1.4;
      this.raceModMass = 1.5;
    } else if (this.raceName=='ORC') {
      this.minTaille = 1.7;
      this.maxTaille = 2.5;
      this.minAge = 12;
      this.maxAge = 60;
      this.raceModFor = 1.3;
      this.raceModDef = 1.1;
      this.raceModMass = 1.2;
    } else if (this.raceName=='GOBELIN') {
      this.minTaille = 0.7;
      this.maxTaille = 1.3;
      this.minAge = 10;
      this.maxAge = 90;
      this.raceModFor = 0.8;
      this.raceModDef = 0.9;
      this.raceModMass = 1.2;
    } else {
      this.minTaille = 1;
      this.maxTaille = 3;
      this.minAge = 10;
      this.maxAge = 400;
      this.raceModFor = 1;
      this.raceModDef = 1;
      this.raceModMass = 1;
    };
  }
}
