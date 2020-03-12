const db = require("../models");
const moment = require("moment");

// Defining methods for the webhookController
module.exports = {
  evaluate: function(req, res) {
    // console.log(req.body.data.subscriber.mobile_number);
    let mobile = req.body.data.subscriber.mobile_number;
    let first =
      req.body.data.subscriber.first !== null
        ? req.body.data.subscriber.first
        : "Unknown";
    let last =
      req.body.data.subscriber.last !== null
        ? req.body.data.subscriber.last
        : "Unknown";
    let email =
      req.body.data.subscriber.email !== null
        ? req.body.data.subscriber.email
        : "Unknown";
    let date = moment(req.body.data.created_at).format("L");
    let keywordTexted = req.body.data.keyword.name;

    //Finds event which is occurring today, with this keyword
    // First, we find the person texting by their mobile number
    db.Person.findOneAndUpdate(
      {
        mobile_number: mobile
      },
      { $set: { lastKeywordTexted: keywordTexted, date: date } },
      { new: true }
    ).then(res => {
      // If the person doens't exist in the detabase, create them.
      if (res === null) {
        console.log("if");
        db.Person.create({
          mobile_number: mobile,
          first: first,
          last: last,
          email: email,
          date: date,
          keywordsTexted: keywordTexted,
          lastKeywordTexted: keywordTexted
        })
          // After creation, query the db for an event
          .then(person => {
            db.Event.findOneAndUpdate(
              {
                // the date and keyword pull up a corresponding event
                date: moment(person.date).format("L"),
                keyword: person.lastKeywordTexted
              },
              // the id of the person is pushed into the event's attenders array
              { $push: { attenders: person._id } },
              { new: true }
            ).then(event => {
              //add eventid to person
              // Now we do the opposite-- making a separate query for the person again
              db.Person.findOneAndUpdate(
                {
                  date: moment(event.date).format("L"),
                  lastKeywordTexted: event.keyword
                },
                //Updates the person's events array
                { $push: { events: event._id } },
                { new: true }
              ).catch(err => {
                console.log(err);
              });
            });
          });
      } else {
        // This fires if the original query came back with a result, and therefore we did not need to create a new person in our database
        console.log("else");
        db.Event.findOneAndUpdate(
          {
            date: moment(res.date).format("L"),
            keyword: res.lastKeywordTexted
          },
          { $push: { attenders: res._id } },
          { new: true }
        ).then(event => {
          //add eventid to person
          console.log("second", event);
          db.Person.findOneAndUpdate(
            {
              date: moment(event.date).format("L"),
              lastKeywordTexted: event.keyword
            },
            //Updates the person's events array
            { $push: { events: event._id } },
            { new: true }
          )
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        });
      }
    });
    res.json();
  }
};
