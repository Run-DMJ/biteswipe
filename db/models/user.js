'use strict'

const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const db = require('APP/db');

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },
  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL,
  refresh_token: Sequelize.STRING,
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
	indexes: [{fields: ['email'], unique: true,}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
    afterCreate: setSettings
  },
  instanceMethods: {
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
});

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
};

function setSettings(user) {
  db.model('searchSettings').findOrCreate({
    where: {user_id: user.id}
  });
};

module.exports = User;
