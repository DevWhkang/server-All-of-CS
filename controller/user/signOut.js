module.exports = {
  get(req, res) {
    const { userId: id } = req.session;
    if (!id) return res.sendStatus(404);
    return req.session.destroy((error) => {
      error && console.error(error);
      res.status(200).json({ id });
    });
  },
};
