const db = require("../models");
const moment = require("moment");

// Defining methods for the webhookController
module.exports = {
  evaluate: function(req, res) {
    // console.log(req.body.data.subscriber.mobile_number);
    let mobile = req.body.data.subscriber.mobile_number;
    let first = req.body.data.subscriber.first;
    let last = req.body.data.subscriber.last;
    let email = req.body.data.subscriber.email;
    let date = moment(req.body.data.created_at).format("L");
    let keywordTexted = req.body.data.keyword.name;

    //Finds event which is occurring today, with this keyword
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
