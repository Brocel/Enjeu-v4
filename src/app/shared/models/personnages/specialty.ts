export class Specialty {
  name: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON';
  readonly modFor: number; //modif de force
  readonly modDef: number; //modif de défense
  readonly modInt: number; //modif de intelligence
  readonly ability : string; //compétence particulière

  // getters
  get name() {
    return this.name;
  }
  get modFor() {
    return this.modFor;
  }
  get modDef() {
    return this.modDef;
  }
  get modInt() {
    return this.modInt;
  }
  get ability() {
    return this.ability;
  }

  constructor(
    name: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'
  )
  {
    this.name = name || 'COMBAT';
    if (this.name=='COMBAT') {
      this.modFor = 1.5;
      this.modDef = 1.5;
      this.modInt = 1;
      this.ability = 'Je me bats très bien au corps à corps';
    } else if (this.name=='ARC') {
      this.modFor = 1.6;
      this.modDef = 1;
      this.modInt = 1.4;
      this.ability = 'Je suis plus efficace à distance';
    } else if (this.name=='SPITITUALITE') {
      this.modFor = 1;
      this.modDef = 1.2;
      this.modInt = 1.8;
      this.ability = 'Je motive les troupes';
    } else if (this.name=='ALCHIMIE') {
      this.modFor = 1;
      this.modDef = 1.4;
      this.modInt = 1.6;
      this.ability = 'Je fabrique des potions alchimiques';
    } else if (this.name=='VOL') {
      this.modFor = 1.2;
      this.modDef = 1.2;
      this.modInt = 1.6;
      this.ability = 'Je suis très discret';
    } else if (this.name=='POISON') {
      this.modFor = 1;
      this.modDef = 1.6;
      this.modInt = 1.4;
      this.ability = 'Je confectionne des poisons';
    }
  }
}
