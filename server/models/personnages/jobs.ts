const mongoose = require('mongoose');

let JobSchema = new mongoose.Schema({
  jobName: { type: 'GUERRIER'|'SAGE'|'ASSASSIN'},
  specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
  //modtiplicateurs statistics
  jobModFor: { type: Number },
  jobModDef: { type: Number },
  jobModInt: { type: Number }
}, { timestamps: true });


JobSchema.methods.toDto = function () {
   return {
       jobId: this._id,
       jobName: this.jobName,
       jobModFor: this.jobModFor,
       jobModDef : this.jobModDef,
       jobModInt: this.jobModInt
   }
};

mongoose.model('Job', JobSchema);
