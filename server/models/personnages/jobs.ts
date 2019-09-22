const mongoose = require('mongoose');

let JobSchema = new mongoose.Schema({
  jobName: { type: Array<'GUERRIER'|'SAGE'|'ASSASSIN'>},
  specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
  //modtiplicateurs statistics
  modFor: { type: Number },
  modDef: { type: Number },
  modInt: { type: Number }
}, { timestamps: true });


JobSchema.methods.toDto = function () {
   return {
       jobId: this._id,
       jobName: this.jobName,
       modFor: this.modFor,
       modDef : this.modDef,
       modInt: this.modInt
   }
};

mongoose.model('Job', JobSchema);
