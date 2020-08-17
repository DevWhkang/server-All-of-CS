module.exports = {
  get(req, res) {
    res.send('Response[GET]: wallet');
  },

  getWithID(req, res) {
    res.send('Response[GET]: wallet with department ID');
  },

  post(req, res) {
    res.send('Response[POST]: wallet');
  },
};
