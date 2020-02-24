const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router
  .route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

router.route("/keyword/:keyword").get(eventsController.findByKeyword);
router.route("name/:name").get(eventsController.findByName);
module.exports = router;
