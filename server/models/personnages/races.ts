
race: { type: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>, default: ['HUMAIN']},

const mongoose = require('mongoose');

let RaceSchema = new mongoose.Schema({

}, { timestamps: true });


RaceSchema.methods.toDto = function () {
   return {
       id: this._id,
   }
};

mongoose.model('Race', RaceSchema);
