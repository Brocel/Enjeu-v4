const mongoose = require('mongoose');

let RaceSchema = new mongoose.Schema({
  raceName: { type: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>, default: ['HUMAIN']},
  minTaille: { type: Number },
  maxTaille: { type: Number },
  minAge: { type: Number },
  maxAge: { type: Number },
  //modtiplicateurs statistics
  modFor: { type: Number },
  modDef: { type: Number },
  modMass: { type: Number }

}, { timestamps: true });


RaceSchema.methods.toDto = function () {
   return {
       raceId: this._id,
       raceName: this.raceName,
       minTaille: this.minTaille,
       maxTaille : this.maxTaille,
       minAge: this.minAge,
       maxAge : this.maxAge,
       modFor: this.modFor,
       modDef : this.modDef,
       modMass: this.modMass
   }
};

mongoose.model('Race', RaceSchema);
