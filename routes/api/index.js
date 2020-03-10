const router = require("express").Router();
const peopleRoutes = require("./people");
const eventsRoutes = require("./events");
const webhookRoutes = require("./webhook");
const userRoutes = require("./users");

// tells express to use different routes
router.use("/people", peopleRoutes);
router.use("/events", eventsRoutes);
router.use("/webhook", webhookRoutes);
router.use("/users", userRoutes);

module.exports = router;
