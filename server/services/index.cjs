const axios = require('axios').default;

const getItemsByQuery = (q) =>
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);

const getItemById = (id) =>
  axios.get(`https://api.mercadolibre.com/items/${id}`);

const getItemDescriptionById = async (id) => {
  try {
    return await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
  } catch (error) {
    console.error('[Item description error]', error);
    return error;
  }
};

const getCategoryById = async (id) => {
  try {
    return await axios.get(`https://api.mercadolibre.com/categories/${id}`);
  } catch (error) {
    console.error('[Category error]', error);
    return error;
  }
}

module.exports = {
  getItemsByQuery,
  getItemById,
  getItemDescriptionById,
  getCategoryById,
};
