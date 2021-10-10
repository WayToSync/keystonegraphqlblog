const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

// <-- MongoDB Cluster URI
const adapterConfig = { mongoUri: process.env.MONGODB_URI };
// -->

// <-- keystoneJSインターフェースへのアクセス方法の設定
const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});
// -->

module.exports = keystone;
