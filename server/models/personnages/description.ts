const mongoose = require('mongoose');

let DescriptionSchema = new mongoose.Schema({
   name: { type: String, maxlength: 20},
   gender: { type: Array<'FEMME'|'HOMME'|'HERMAPHRODITE'>, default: ['FEMME']},
   race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' },
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
       mood : this.mood,
       avatar: this.avatar,
       story : this.story
   }
};

mongoose.model('Description', DescriptionSchema);
