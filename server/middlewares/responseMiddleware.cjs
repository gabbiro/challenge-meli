const itemMapper = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price.toFixed(0),
    decimals: item.price % 1
  },
  picture: item.thumbnail,
  condition: item.condition,
  freeShipping: item.shipping?.free_shipping,
  // unable to find soldQuantity on API response
  soldQuantity: 10,
  description: item.plain_text,
  location: item.location?.city?.name,
});

const responseMiddleware = async (req, res, _next) => {
  const mapping = {
    author: res.author,
  };
  mapping.categories = res.data?.categories || [];
  if (req.query?.q) {
    mapping.items = res.data.results.map((item) => itemMapper(item));
  } else if (req.params?.id) {
    mapping.item = itemMapper(res.data);
  }

  res.json(mapping);
};

module.exports = responseMiddleware;
