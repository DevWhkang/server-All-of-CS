module.exports = {
  get(req, res) {
    res.send(`Response[GET]: department (id: ${req.params.id})`);
  },
};
