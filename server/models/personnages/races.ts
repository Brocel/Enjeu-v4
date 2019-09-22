const mongoose = require('mongoose');

let RaceSchema = new mongoose.Schema({
  raceName: { type: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>, default: ['HUMAIN']},
  minTaille: { type: Number },
  maxTaille: { type: Number },
  minAge: { type: Number },
  maxAge: { type: Number },
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
       minAge: this.minAge,
       maxAge : this.maxAge,
       mulFor: this.mulFor,
       mulDef : this.mulDef,
       mulMass: this.mulMass
   }
};

mongoose.model('Race', RaceSchema);
