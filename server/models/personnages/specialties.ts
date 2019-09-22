const mongoose = require('mongoose');

let SpecialtySchema = new mongoose.Schema({
  speName: { type: Array<'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'>},
  ability: { type: String },
  //modtiplicateurs statistics
  modFor: { type: Number },
  modDef: { type: Number },
  modInt: { type: Number }
}, { timestamps: true });


SpecialtySchema.methods.toDto = function () {
   return {
       speId: this._id,
       ability: this.ability,
       speName: this.speName,
       modFor: this.modFor,
       modDef : this.modDef,
       modInt: this.modInt
   }
};

mongoose.model('Specialty', SpecialtySchema);
