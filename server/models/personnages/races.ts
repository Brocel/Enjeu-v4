const mongoose = require('mongoose');

let RaceSchema = new mongoose.Schema({
  raceName: { type: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>, default: ['HUMAIN']},
  minTaille: { type: Number },
  maxTaille: { type: Number },
  //multiplicateurs statistics
  mulFor: { type: Number },
  mulDef: { type: Number },
  mulMass: { type: Number }

}, { timestamps: true });


RaceSchema.methods.toDto = function () {
   return {
       raceId: this._id,
       raceName: this.raceName,
       minTaille: this.minTaille,
       maxTaille : this.maxTaille,
       mulFor: this.mulFor,
       mulDef : this.mulDef,
       mulMass: this.mulMass
   }
};

mongoose.model('Race', RaceSchema);
