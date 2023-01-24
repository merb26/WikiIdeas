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
    const {title, category, body} = articleSave;

    if (!title) {
      return {message: 'El campo título está vacío'};
    } else if (!category) {
      return {message: 'El campo categoría está vacío'};
    } else if (!body) {
      return {message: 'El campo contenido está vacío'};
    }

    const article = await dao.save(articleSave);

    return {message: 'Ha creado el tema con éxito', article};
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
