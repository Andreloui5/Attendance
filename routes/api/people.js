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

// Matches tih "/api/people/:first/:last"
router.route("/:first/:last").get(peopleController.findPersonByName);
module.exports = router;
