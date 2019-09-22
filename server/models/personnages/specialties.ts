const mongoose = require('mongoose');

let SpecialtySchema = new mongoose.Schema({
  speName: { type: Array<'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'>},
  ability: { type: String },
  //multiplicateurs statistics
  mulFor: { type: Number },
  mulDef: { type: Number },
  mulInt: { type: Number }
}, { timestamps: true });


SpecialtySchema.methods.toDto = function () {
   return {
       speId: this._id,
       ability: this.ability,
       speName: this.speName,
       mulFor: this.mulFor,
       mulDef : this.mulDef,
       mulInt: this.mulInt
   }
};

mongoose.model('Specialty', SpecialtySchema);
