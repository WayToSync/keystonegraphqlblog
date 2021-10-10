const { Text, Select, Relationship } = require('@keystonejs/fields');

// Post Schema
const postFields = {
  fields: {
    title: {
      type: Text,
      // <-- Titleは必要です
      isRequired: true,
      // -->
    },
    body: {
      type: Text,
      // <-- Text Area
      isMultiline: true,
      // -->
    },
    status: {
      type: Select,
      options: [
        { value: 'PUBLISHED', label: 'Published' },
        { value: 'UNPUBLISHED', label: 'Unpublished' },
      ],
      defaultValue: 'PUBLISHED',
    },
    author: {
      // <-- 投稿とユーザーのリンク
      type: Relationship,
      ref: 'User',
      // -->
      // <-- 1記事につき1人の著者
      many: false,
      // -->
      isRequired: true,
    },
  },
};

module.exports = postFields;
