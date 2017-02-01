const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const env = require('APP').env;
const User = require('APP/db/models/user');

const authenticateRefreshToken = (req, res, next) => {

  const header = req.headers['authorization'];
  if(!header) return res.status(401).send('Authorization header not found');

  const refreshToken = header.replace('Bearer ', '');
  if(!refreshToken) return res.status(401).send('Refresh token not found');

  return User.findOne({
    where: {
      refresh_token: refreshToken
    }
  })
  .then(user => {
    if(!user) res.status(401).send('Invalid refresh token');
    else {
      req.user = user;
      next();
    }
  })
  .catch(next);
};

const authenticateAccessToken = (req, res, next) => {

  const header = req.headers['authorization'];
  if(!header) return res.status(401).send('Authorization header not found');

  const accessToken = header.replace('Bearer ', '');
  if(!accessToken) return res.status(401).send('Access token not found');

  const obj = jwt.verify(accessToken, env.SERVER_SECRET);
  if(!obj) return res.status(401).send('Invalid Access token');

  User.findById(obj.id)
  .then(user => {
    if(!user) res.sendStatus(401);
    else {    
      req.user = user;
      next();
    }
  })
  .catch(next);
};

const generateRefreshToken = (req, res, next) => {
  const refreshToken = req.user.id + '.' + crypto.randomBytes(40).toString('hex')
  User.update({refresh_token: refreshToken}, {where: {id: req.user.id}})
  .then(user => {
    if(!user) res.sendStatus(404);
    else {    
      req.refreshToken = refreshToken;
      next();
    }
  })
  .catch(next);
};

const generateAccessToken = (req, res, next) => {
  req.accessToken = jwt.sign({id: req.user.id}, env.SERVER_SECRET, {expiresIn: 24*60*60});
  req.accessToken = jwt.sign({id: req.user.id}, env.SERVER_SECRET, {expiresIn: 15});
  next();
};

const respond = (req, res) => {
  res.status(200).json({
    refreshToken: req.refreshToken,
    accessToken: req.accessToken
  });
};

const redirect = (req, res) => {
  const url = `biteswipe://callback?page=login&refresh=${req.refreshToken}&access=${req.accessToken}`;
  res.redirect(url);
};

module.exports = {
  authenticateRefreshToken,
  authenticateAccessToken,
  generateRefreshToken,
  generateAccessToken,
  respond,
  redirect
};