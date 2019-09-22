const mongoose = require('mongoose');

let DescriptionSchema = new mongoose.Schema({
   name: { type: String, maxlength: 20},
   gender: { type: Array<'FEMME'|'HOMME'|'HERMAPHRODITE'>, default: ['FEMME']},
   race: { type: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>, default: ['HUMAIN']},
   mood: { type: String, maxlength: 20},
   job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
   avatar: { type: String},
   story: { type: String, maxlength: 500}
}, { timestamps: true });


DescriptionSchema.methods.toDto = function () {
   return {
       id: this._id,
       name: this.name,
       gender : this.gender,
       race: this.race,
       mood : this.mood,
       avatar: this.avatar,
       story : this.story
   }
};

mongoose.model('Description', DescriptionSchema);
