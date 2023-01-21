const mongoose = require('mongoose');

const articlesDAO = require('../src/dao/articlesDao');

mongoose.connect(
  'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/wikiideas'
);

(async () => {
  console.log('****Prueba MongoDB****');

  /* -------------------------------------------------------------------------- */
  /*                                    Read                                    */
  /* -------------------------------------------------------------------------- */
  const listArticles = await new articlesDAO().getAll();
  console.log(listArticles);
})();
