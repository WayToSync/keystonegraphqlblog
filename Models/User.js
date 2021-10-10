const { Text, Password, Checkbox } = require('@keystonejs/fields');

// User Schema
const userFields = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
      // 2人のユーザーに同じメールを使用することはできません。
      isUnique: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
      isRequired: true,
    },
  },
};

module.exports = userFields;
