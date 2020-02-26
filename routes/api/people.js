const router = require("express").Router();
const peopleController = require("../../controllers/peopleController");

// Matches with "/api/people"
router
  .route("/")
  .get(peopleController.findAll)
  .post(peopleController.create);

// Matches with "/api/people/:id"
router
  .route("/:id")
  .get(peopleController.findById)
  .put(peopleController.update)
  .delete(peopleController.remove);

// Matches with "/api/people/:first
router.route("/name/:first").get(peopleController.findPersonByFirst);
// Matches with "/api/people/:first"
router.route("/name/:first/:last").get(peopleController.findPersonByFull);
// Matches with "/api/people/cell/:number
router.route("/cell/:number").get(peopleController.findPersonByCell);
// Matches with "/populate/:id"
router.route("/populate/:id").get(peopleController.populate);
module.exports = router;
