const mongoose = require('mongoose');

let StatisticsSchema = new mongoose.Schema({
   taille: { type: Number},
   mass: { type: Number},
   age: { type: Number},
   force: { type: Number},
   defense: { type: Number},
   intel: { type: Number}
}, { timestamps: true });


StatisticsSchema.methods.toDto = function () {
   return {
       statsId: this._id,
       taille: this.taille,
       mass : this.mass,
       age: this.age,
       force : this.force,
       defense: this.defense,
       intel : this.intel
   }
};

mongoose.model('Statistics', StatisticsSchema);
