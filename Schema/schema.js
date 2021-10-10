const isAdmin = ({ authentication: { item: user } }) => {
  return !!user && !!user.isAdmin;
};

const isLoggedIn = ({ authentication: { item: user } }) => {
  return !!user;
};

// <-- KeystoneJSインターフェースでのリスト作成
function schema(fieldsName, userLogged) {
  return {
    fields: fieldsName.fields,
    // <-- 作成したスキームへのアクセスを管理する
    access: {
      read: true,
      create: userLogged,
      update: userLogged,
      delete: userLogged,
    },
    // -->
  };
}
// -->

module.exports = {
  isAdmin,
  isLoggedIn,
  schema,
};
