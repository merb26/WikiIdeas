const {Router} = require('express');
const articlesController = require('../controllers/articlesController');

const articlesRoute = Router();

articlesRoute.get('/', articlesController.getAll);

articlesRoute.post('/', articlesController.save);

articlesRoute.post('/update', articlesController.update);

articlesRoute.delete('/', articlesController.deleteById);

module.exports = articlesRoute;
