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
}
