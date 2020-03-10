const Account = require("../models/account");
const passport = require("passport");

// Thanks to djibba22 (on Github) for permission to use his code for this controller.
module.exports = {
  getUser: function(req, res, next) {
    if (req.session.passport.user) {
      console.log(`yes user in controller: ${req.session.passport.user}`);
      return res.status(200).json({
        user: req.session.passport.user,
        authenticated: true
      });
    } else {
      return res.status(401).json({
        error: "User is not authenticated",
        authenticated: false
      });
    }
  },
  register: function(req, res, next) {
    console.log("/register handler", req.body);
    Account.register(
      new Account({ username: req.body.username }),
      req.body.password,
      (err, account) => {
        if (err) {
          return res.status(500).send({ error: err.message });
        }

        passport.authenticate("local")(req, res, () => {
          req.session.save(err => {
            if (err) {
              //ToDo:log the error and look for an existing user

              return next(err);
            }

            res.send(200, "successful register");
          });
        });
      }
    );
  },
  login: function(req, res, next) {
    console.log("/login handler");
    if (!req.session.passport.user) {
      return false;
    }
    req.session.save(err => {
      if (err) {
        return next(err);
      }
      console.log(`User at login ${req.user.username}`);

      res.status(200).json({ test: " testvalue" });
    });
  },
  logout: function(req, res, next) {
    req.logout();
    req.session.save(err => {
      if (err) {
        return next(err);
      }
      res.status(200).send("OK");
    });
  },

  test: function(req, res, next) {
    console.log(`Ping Dinger ${req.statusCode}`);
    res.status(200).send("Dong!");
  }
};
