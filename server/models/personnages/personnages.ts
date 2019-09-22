import mongoose from 'mongoose';

const mongoose = require('mongoose');

let PersonnageSchema = new mongoose.Schema({
   role: { type: Array<'JOUEUR'|'MOB'>},
   description: { type: mongoose.Schema.Types.ObjectId, ref: 'Description' },
   statistics: { type: mongoose.Schema.Types.ObjectId, ref: 'Statistics' }
}, { timestamps: true });


TaskSchema.methods.toDto = function () {
   return {
       id: this._id,
       content: this.content,
       state: this.state
   }
};

mongoose.model('Personnage', PersonnageSchema);
