const db = require("../models");

// Defining methods for the webhookController
module.exports = {
  evaluate: function(req, res) {
    // console.log(req.body.data.subscriber.mobile_number);
    let mobile = req.body.data.subscriber.mobile_number;
    let first = req.body.data.subscriber.first;
    let last = req.body.data.subscriber.last;
    let email = req.body.data.subscriber.email;
    let date = req.body.created_at;
    let keywordsTexted = req.body.data.keyword.name;

    // console.log(typeof mobile);
    db.Person.findOne({
      mobile_number: mobile
    }).then(res => {
      // If person does not exist, create person
      if (res === null) {
        db.Person.create({
          mobile_number: mobile,
          first: first,
          last: last,
          email: email,
          date: date,
          keywordsTexted: keywordsTexted,
          pair: [{ date }, { keywordsTexted }]
        })
          // upon success, send res of 200 to the origin of the webhook
          .then(res => {
            console.log(res);
          })
          // catch any errors
          .catch(err => res.status(422).json(err));
      }
      // if person already exists, update person's keyword field
      else {
        console.log("if");
        db.Person.findOneAndUpdate(
          { _id: res._id },
          { $push: { keywordsTexted: keywordsTexted } },
          { $push: { pair: [{ date }, { keywordsTexted }] } },
          { new: true }
        )
          // upon success, send res of 200 to the origin of the webhook
          .then(res => {
            console.log(res);
          })
          // catch any errors
          .catch(err => res.status(422).json(err));
      }
    });
    res.json();
  }
};
