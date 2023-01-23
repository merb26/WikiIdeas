const articles = require('./schemas/articles');

class articlesDAO {
  async getAll() {
    const listArticles = await articles.find();

    return listArticles;
  }

  async save(article) {
    const articleSave = new articles(article);
    await articleSave.save();
  }

  async delete(_id) {
    console.log('id: ', _id);
    await articles.deleteOne({_id});
  }
}

module.exports = articlesDAO;
