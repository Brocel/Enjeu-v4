export class Job {
  jobName: 'GUERRIER'|'SAGE'|'ASSASSIN';
  readonly jobModFor: number; //jobModif de force
  readonly jobModDef: number; //jobModif de défense
  readonly jobModInt: number; //jobModif de intelligence

  // getters
  get theJobName() {
    return this.jobName;
  }
  get theJobModFor() {
    return this.jobModFor;
  }
  get theJobModDef() {
    return this.jobModDef;
  }
  get theJobModInt() {
    return this.jobModInt;
  }

  constructor(
    job: 'GUERRIER'|'SAGE'|'ASSASSIN'
  )
  {
    this.jobName = name || 'GUERRIER';
    if (this.jobName=='GUERRIER') {
      this.jobModFor = 1.2;
      this.jobModDef = 1.2;
      this.jobModInt = 0.6;
    } else if (this.jobName=='SAGE') {
      this.jobModFor = 0.8;
      this.jobModDef = 0.8;
      this.jobModInt = 1.4;
    } else if (this.jobName=='ASSASSIN') {
      this.jobModFor = 1.2;
      this.jobModDef = 0.6;
      this.jobModInt = 1.2;
    }
  }

}
