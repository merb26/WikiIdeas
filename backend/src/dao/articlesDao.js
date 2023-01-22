const articles = require('./schemas/articles');

class articlesDAO {
  async getAll() {
    const listArticles = articles.find();

    return listArticles;
  }

  async save(article) {
    const articleSave = new articles(article);
    articleSave.save();
  }
}

module.exports = articlesDAO;
