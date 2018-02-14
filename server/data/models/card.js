const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CardSchema = new Schema({
  cardTitle: String,
  description: String,
  members: Array,
  changes: Array
}, {
  timestamps: true
});

CardSchema.statics.update = (id, data) => {
  return Card.findByIdAndUpdate(id, data);
}

var Card = mongoose.model('Card', CardSchema);

module.exports = Card;