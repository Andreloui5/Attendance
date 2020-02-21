const db = require("../models");

// Defining methods for the webhookController
module.exports = {
  evaluate: function(req, res) {
    db.Person.findOne({
      mobile_number: req.body.data.subscriber.mobile_number
    })
      .then(res => {
        // If exists, update person's keyword field
        if (res.status === 200) {
          db.Person.update({
            keywordsTexted: req.body.data.keyword.name
          });
        }
        // if person doesn't exist, create person
        else {
          db.Person.create({
            mobile_number: req.body.data.subscriber.mobile_number,
            first: req.body.data.subscriber.first,
            last: req.body.data.subscriber.last,
            email: req.body.data.subscriber.email,
            date: req.body.created_at,
            keywordsTexted: req.body.data.keyword.name
          });
        }
      })
      // upon success, send res of 200 to the origin of the webhook
      .then(res.status(200))
      // catch any errors
      .catch(err => res.status(422).json(err));
  }
};
