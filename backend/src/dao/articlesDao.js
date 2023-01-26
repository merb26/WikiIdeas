const articles = require('./schemas/articles');

class articlesDAO {
  async getAll() {
    const listArticles = await articles.find();

    return listArticles;
  }

  async save(article) {
    const articleSave = new articles(article);
    return await articleSave.save();
  }

  async update(article) {
    const {id, title, category, body} = article;

    try {
      return await articles.updateOne(
        {_id: id},
        {$set: {title, category, body}}
      );
    } catch (error) {
      return {error};
    }
  }

  async delete(_id) {
    try {
      return await articles.deleteOne({_id});
    } catch (error) {
      return {error};
    }
  }
}

module.exports = articlesDAO;
