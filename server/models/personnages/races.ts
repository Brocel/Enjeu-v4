const mongoose = require('mongoose');

let RaceSchema = new mongoose.Schema({
  raceName: { type: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN', default: 'HUMAIN'},
  minTaille: { type: Number },
  maxTaille: { type: Number },
  minAge: { type: Number },
  maxAge: { type: Number },
  //modtiplicateurs statistics
  raceModFor: { type: Number },
  raceModDef: { type: Number },
  raceModMass: { type: Number }

}, { timestamps: true });


RaceSchema.methods.toDto = function () {
   return {
       raceId: this._id,
       raceName: this.raceName,
       minTaille: this.minTaille,
       maxTaille : this.maxTaille,
       minAge: this.minAge,
       maxAge : this.maxAge,
       raceModFor: this.raceModFor,
       raceModDef : this.raceModDef,
       raceModMass: this.raceModMass
   }
};

mongoose.model('Race', RaceSchema);
