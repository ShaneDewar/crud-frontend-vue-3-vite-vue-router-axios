module.exports = (routes) => {
  const media = require("../controllers/media.controller.js");

  let router = require("express").Router();

  // Create Media
  router.post("/create", media.create);

  // Find all Media
  router.get("/media", media.findAll);

  // Find One by ID
  router.get("/media/:id", media.findById);

  routes.use("/", router);
};
