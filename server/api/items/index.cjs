const router = require('express').Router();
const services = require('./../../services/index.cjs');
const authorMiddleware = require('./../../middlewares/authorMiddleware.cjs');
const responseMiddleware = require('./../../middlewares/responseMiddleware.cjs');

const getCategoryHandler = (categoryId, next, callback) => {
  if (!categoryId) return next();
  services.getCategoryById(categoryId).then((categories) => {
    callback(categories);
    next();
  });
}

const apiCall = (req, res, next) => {
  if (req.query && req.query.q) {
    services.getItemsByQuery(req.query.q).then((result) => {
      res.data = result.data;

      let category = res.data.filters?.find((obj) => obj.id === 'category');
      if (category) {
        res.data.categories = category?.values[0]?.path_from_root || [];
        next();
      } else {
        category = res.data.available_filters?.find((obj) => obj.id === 'category');
        const categoryId = category?.values?.[0]?.id;
        getCategoryHandler(categoryId, next, (categories) => {
          res.data = Object.assign(
            {},
            res.data,
            { categories: categories?.data?.path_from_root }
          );
        });
      }
    }).catch((error) => res.status(error.response?.status || 500).send(error));
  } else if (req.params && req.params.id) {
    const productPromise = services.getItemById(req.params.id);
    const productDescriptionPromise = services.getItemDescriptionById(req.params.id);

    Promise.all([productPromise, productDescriptionPromise]).then(
      (result) => {
        const categoryId = result[0].data?.category_id;
        getCategoryHandler(categoryId, next, (categories) => {
          res.data = Object.assign(
            {},
            result[0].data,
            result[1].data,
            { categories: categories?.data?.path_from_root }
          );
        });
      }
    ).catch((error) => res.status(error.response?.status || 500).send(error));
  }
};

// api/items/:id
router.get(
  '/:id?',
  authorMiddleware,
  apiCall,
  responseMiddleware
);

module.exports = router;
