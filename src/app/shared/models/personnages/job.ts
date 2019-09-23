export class Job {
  name: 'GUERRIER'|'SAGE'|'ASSASSIN';
  readonly modFor: number; //modif de force
  readonly modDef: number; //modif de défense
  readonly modInt: number; //modif de intelligence

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

  constructor(
    name: 'GUERRIER'|'SAGE'|'ASSASSIN'
  )
  {
    this.name = name || 'GUERRIER';
    if (this.name=='GUERRIER') {
      this.modFor = 1.2;
      this.modDef = 1.2;
      this.modInt = 0.6;
    } else if (this.name=='SAGE') {
      this.modFor = 0.8;
      this.modDef = 0.8;
      this.modInt = 1.4;
    } else if (this.name=='ASSASSIN') {
      this.modFor = 1.2;
      this.modDef = 0.6;
      this.modInt = 1.2;
    }
  }

}
