const mongoose = require('mongoose');

let SpecialtySchema = new mongoose.Schema({
  specName: { type: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'},
  ability: { type: String },
  //modtiplicateurs statistics
  specModFor: { type: Number },
  specModDef: { type: Number },
  specModInt: { type: Number }
}, { timestamps: true });


SpecialtySchema.methods.toDto = function () {
   return {
       specId: this._id,
       ability: this.ability,
       specName: this.specName,
       specModFor: this.specModFor,
       specModDef : this.specModDef,
       specModInt: this.specModInt
   }
};

mongoose.model('Specialty', SpecialtySchema);
