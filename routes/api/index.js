const router = require("express").Router();
const peopleRoutes = require("./people");
const eventsRoutes = require("./events");

// tells express to use different routes
router.use("/people", peopleRoutes);
router.use("/events", eventsRoutes);

module.exports = router;
