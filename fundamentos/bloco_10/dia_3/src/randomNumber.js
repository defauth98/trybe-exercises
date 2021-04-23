const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);

  return number;
};

module.exports = { randomNumber: randomNumber };
