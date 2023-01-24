const articlesDAO = require('../dao/articlesDao');

const dao = new articlesDAO();

class articlesService {
  async getAll() {
    let articles = await dao.getAll();

    if (!articles.length)
      articles = {message: 'No hay temas, agregue un nuevo tema.'};

    return articles;
  }
  async save(articleSave) {
    const result = await dao.save(articleSave);

    return result;
  }
  async update(articleReplace) {
    const result = await dao.update(articleReplace);

    return result;
  }
  async deleteById(id) {
    const result = await dao.delete(id);

    if (!result.deletedCount)
      return {message: 'No se pudo eliminar, intente de nuevo.'};

    return {message: 'Eliminado con éxito'};
  }
}

module.exports = articlesService;
