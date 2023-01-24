const articlesService = require('../services/articlesService');

const service = new articlesService();

const articlesController = {
  getAll: async (req, res) => {
    const articles = await service.getAll();

    res.json(articles);
  },
  save: async (req, res) => {
    const {title, category, body} = req.body;

    const isSaved = await service.save({title, category, body});

    res.json(isSaved);
  },
  update: async (req, res) => {
    const {id, title, category, body} = req.body;

    const isUpdated = await service.update({id, title, category, body});

    res.json(isUpdated);
  },
  deleteById: async (req, res) => {
    const {id} = req.body;

    const isDeleted = await service.deleteById(id);

    res.json(isDeleted);
  },
};

module.exports = articlesController;
