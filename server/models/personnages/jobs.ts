const mongoose = require('mongoose');

let JobSchema = new mongoose.Schema({

}, { timestamps: true });


JobSchema.methods.toDto = function () {
   return {
       id: this._id,
   }
};

mongoose.model('Job', JobSchema);
