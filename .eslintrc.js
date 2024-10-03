module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser', // Use this if you installed @babel/eslint-parser
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  rules: {
    // Add any custom rules here
  },
};
