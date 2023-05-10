const mongoose = require('mongoose');

const coronaSchema = new mongoose.Schema({
    memberId: {
      type: String,
      ref: 'Member',
      required: true,
      unique: true,
    },
    vaccines: [{
      date: {
        type: Date,
        required: true,
      },
      manufacturer: {
        type: String,
        required: true,
        enum: ['Pfizer', 'Moderna', 'AstraZeneca','Bharat Biotech'],

      },
    }],
    positiveResult: {
      date: {
        type: Object,
      } }, 
      
      recoveryDate: {
        type: String,
      },
     });
  

const Corona = mongoose.model('Corona', coronaSchema);

module.exports = Corona