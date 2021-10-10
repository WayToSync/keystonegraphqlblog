const keystone = require('./keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

// <-- keystoneJSインターフェースへのアクセス方法の設定
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password',
  },
});
// -->

module.exports = authStrategy;
