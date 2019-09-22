const mongoose = require('mongoose');

let PersonnageSchema = new mongoose.Schema({
   role: { type: Array<'JOUEUR'|'MOB'>},
   description: { type: mongoose.Schema.Types.ObjectId, ref: 'Description' },
   statistics: { type: mongoose.Schema.Types.ObjectId, ref: 'Statistics' }
}, { timestamps: true });


PersonnageSchema.methods.toDto = function () {
   return {
       id: this._id,
       role: this.role
   }
};

mongoose.model('Personnage', PersonnageSchema);
