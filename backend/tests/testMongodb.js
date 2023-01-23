const mongoose = require('mongoose');

const articlesDAO = require('../src/dao/articlesDao');

mongoose.connect(
  'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/wikiideas'
);

(async () => {
  console.log('****Prueba MongoDB****');

  /* -------------------------------------------------------------------------- */
  /*                                   Create                                   */
  /* -------------------------------------------------------------------------- */
  // const articleSave = {
  //   title: 'Prueba MongoDB',
  //   category: 'categoria',
  //   body: 'escribiendo articulo',
  // };

  // new articlesDAO().save(articleSave);

  /* -------------------------------------------------------------------------- */
  /*                                    Read                                    */
  /* -------------------------------------------------------------------------- */
  // const listArticles = await new articlesDAO().getAll();
  // console.log(listArticles);

  /* -------------------------------------------------------------------------- */
  /*                                   Update                                   */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                   Delete                                   */
  /* -------------------------------------------------------------------------- */
  // const id = '63c9da580c5a09f67be11957';
  // new articlesDAO().delete(id);
})();
