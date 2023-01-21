const articles = require('./schemas/articles');

class articlesDAO {
  async getAll() {
    const listArticles = articles.find();

    return listArticles;
  }
}

module.exports = articlesDAO;
