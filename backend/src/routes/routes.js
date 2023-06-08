const express = require('express');
const routes = express.Router();
const controller = require('../controllers/controller')

routes.post('/adicionalivro', controller.addBook);
routes.post('/adicionacategoria', controller.addCategorie);
routes.get('/imprimelivros', controller.checkBook);
routes.get('/imprimecategorias', controller.getCategories);
routes.put('/atualizalivro', controller.updateBook);
routes.delete('/deletalivro', controller.deleteBook);

module.exports = routes;