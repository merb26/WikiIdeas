const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(
  'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/wikiideas'
);

const collection = 'articles';

const schema = mongoose.Schema({
  name: {type: String},
  category: {type: String},
  body: {type: String},
});

const articles = mongoose.model(collection, schema);

const article = new articles({
  name: 'nuevo articulo',
  category: 'general',
  body: 'aqui escribes sobre el nuevo artículo',
});
article.save();
