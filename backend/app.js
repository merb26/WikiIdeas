const express = require('express');
const {mongoose} = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/wikiideas'
);

app.use('/articles', require('./src/routes/articlesRoute'));

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log('RUNNING SERVER ON PORT', port);
});
