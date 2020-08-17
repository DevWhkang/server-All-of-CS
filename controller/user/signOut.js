module.exports = {
  get(req, res) {
    if (req.session.userId) {
      res.json({ id: req.session.userId });
      req.session.destroy();
      res.redirect('/');
    } else {
      res.redirect('/');
    }
    res.send('Response[GET]: signOut');
  },
};
