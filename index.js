const dotenv = require('dotenv').config();
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const keystone = require('./api/keystone');
const { isAdmin, isLoggedIn, schema } = require('./Schema/schema');
const PROJECT_NAME = 'keystone-graphql-blog';

const PostSchema = require('./Models/Post');
const UserSchema = require('./Models/User');

// <-- KeystoneJSインターフェースでのリスト作成
keystone.createList('Post', schema(PostSchema, isLoggedIn));
keystone.createList('User', schema(UserSchema, isAdmin));
// -->

const authStrategy = require('./api/authentication');

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      // <-- KeystoneJsインターフェースでの認証を使用する場合は、コメントを外してください。
      // authStrategy,
      // isAccessAllowed: isAdmin,
      // -->
    }),
  ],
};
