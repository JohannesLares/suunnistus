const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Schema for a user-model
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ticks: [{
    type: 
  }]
}, {timestamps: true});

// Add unique validation. Code of the tick must be unique
userSchema.plugin(uniqueValidator);

// Return a bit prettified json.
userSchema.set('toJSON', {
  transform: (doc, returnObject) => {
    returnObject.id = returnObject._id;
    delete returnObject._id;
  },
});

module.exports = mongoose.model('User', userSchema);
