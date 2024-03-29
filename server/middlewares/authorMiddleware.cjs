const authorMiddleware = (_req, res, next) => {
  res.author = {
    name: 'Gabriela',
    lastname: 'Rodriguez'
  };
  next();
};

module.exports = authorMiddleware;
