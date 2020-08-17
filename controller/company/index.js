module.exports = {
  get(req, res) {
    res.send(`Response[GET]: company (id: ${req.params.id})`);
  },
};
