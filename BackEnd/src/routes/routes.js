const { Router } = require("express");
const promptController = require("../controllers/promptController");

const routes = Router();

routes.post("/api/prompt",promptController.sendText)

module.exports = routes