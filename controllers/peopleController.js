const db = require("../models");

// Defining methods for the peopleController
module.exports = {
  findAll: function(req, res) {
    db.Person.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Person.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPersonByFirst: function(req, res) {
    db.Person.find({
      first: { $regex: req.params.first, $options: "i" }
    })
      .sort({ last: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPersonByCell: function(req, res) {
    db.Person.find({
      mobile_number: { $regex: req.params.number, $options: "i" }
    })
      .sort({ last: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPersonByFull: function(req, res) {
    db.Person.find({
      first: { $regex: req.params.first, $options: "i" },
      last: { $regex: req.params.last, $options: "i" }
    })
      .sort({ last: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Person.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Person.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Person.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
