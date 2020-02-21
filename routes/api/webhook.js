const router = require("express").Router();
const webhookController = require("../../controllers/webhookController");

// Matches with our webhook, at "/api/webhook"
router.route("/").post(webhookController.evaluate);
// // Matches with "/api/webhook/:id"
// router.route("/:id").put(webhookController.update);

module.exports = router;
