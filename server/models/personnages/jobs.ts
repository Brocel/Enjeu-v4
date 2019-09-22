const mongoose = require('mongoose');

let JobSchema = new mongoose.Schema({
  jobName: { type: Array<'GUERRIER'|'SAGE'|'ASSASSIN'>},
  specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
  //multiplicateurs statistics
  mulFor: { type: Number },
  mulDef: { type: Number },
  mulInt: { type: Number }
}, { timestamps: true });


JobSchema.methods.toDto = function () {
   return {
       jobId: this._id,
       jobName: this.jobName,
       mulFor: this.mulFor,
       mulDef : this.mulDef,
       mulInt: this.mulInt
   }
};

mongoose.model('Job', JobSchema);
