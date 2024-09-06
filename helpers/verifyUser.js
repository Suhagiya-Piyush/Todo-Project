exports.isAuthenticate = (req, res, next) => {
  if (req.isAuthenticated()) 
    next();
};
