var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var User = require("../model/User");
var config = require("../config/database");

module.exports = passport => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  opts.issuer = "accounts.examplesoft.com";
  opts.audience = "yoursite.net";
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      User.getUserByID({ id: jwt_payload._doc._id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );
};
