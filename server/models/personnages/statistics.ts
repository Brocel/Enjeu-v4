const mongoose = require('mongoose');

let StatisticsSchema = new mongoose.Schema({
   taille: { type: Number},
   mass: { type: Number},
   age: { type: Number},
   for: { type: Number},
   def: { type: Number},
   int: { type: Number}
}, { timestamps: true });


StatisticsSchema.methods.toDto = function () {
   return {
       statsId: this._id,
       taille: this.taille,
       mass : this.mass,
       age: this.age,
       for : this.for,
       def: this.def,
       int : this.int
   }
};

mongoose.model('Statistics', StatisticsSchema);
