const fetch = require('node-fetch');

const getDogsPictures = () => {
  return new Promise((resolve, reject) => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        response.json().then((json) => resolve(json));
      })
      .catch((err) => reject(err));
  });
};

module.exports = { getDogsPictures };
