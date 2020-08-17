module.exports = {
  get(req, res) {
    res.send(`Response[GET]: tag (query: ${req.query.tag_name})`);
  },
};
