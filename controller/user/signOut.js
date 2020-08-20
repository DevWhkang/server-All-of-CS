const { verifyToken } = require('../../modules/jwt');

module.exports = {
  get(req, res) {
    const { token } = req.cookies;
    if (!token) return res.sendStatus(404);
    const { id } = verifyToken(token);
    res.cookie('token', '');
    return res.status(200).json({ id });
  },
};
