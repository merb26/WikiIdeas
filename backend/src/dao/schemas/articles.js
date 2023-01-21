const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const collection = 'articles';

const schema = mongoose.Schema({
  name: {type: String},
  category: {type: String},
  body: {type: String},
});

module.exports = mongoose.model(collection, schema);
