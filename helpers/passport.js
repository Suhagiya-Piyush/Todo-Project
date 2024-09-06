const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/user.model");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done)=> {
      let user = await User.findOne({ email: email });
        if (!user) {
          return done(null, false);
        }
        if (user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((userObj, done) => {
  done(null, userObj);
});
