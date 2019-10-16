const express = require('express');
const routes = express.Router();

const ChurchController = require('./controllers/ChurchController');

routes.get("/churches", ChurchController.index);
routes.get("/churches/:id", ChurchController.show);
routes.post("/churches", ChurchController.store);
routes.put("/churches/:id", ChurchController.update);
routes.delete("/churches/:id", ChurchController.destroy);

module.exports = routes;