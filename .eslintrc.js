module.exports = {
  "extends": ["airbnb/base", "prettier", "plugin:vue/essential"],
  "plugins": ["prettier"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
  },
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "rules": {
    "semi": 2,
    "func-names": "off",
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-unused-vars": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "object-shorthand": "off",
    "default-case": "off",
    "import/no-extraneous-dependencies": "off"
  }
}