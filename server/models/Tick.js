const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Schema for a tick-model (rasti)
const tickSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  code: {
    tpye: String,
    unique: true,
    required: true,
  },
  location: {},
}, {timestamps: true});

// Add unique validation. Code of the tick must be unique
tickSchema.plugin(uniqueValidator);

// Return a bit prettified json.
tickSchema.set('toJSON', {
  transform: (doc, returnObject) => {
    returnObject.id = returnObject._id;
    delete returnObject._id;
  },
});

module.exports = mongoose.model('Tick', tickSchema);
