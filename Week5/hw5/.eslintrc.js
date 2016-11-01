// .eslintrc.js
module.exports = {
    extends: "airbnb-base",
    plugins: [
        "react",
        "jsx-a11y",
        "import"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    rules: {
      'no-console': 0,
      'no-tabs': 0,
      'indent': 0,
      'no-unused-vars': 0,
      'space-unary-ops': 0,
      'import/newline-after-import': 0,
      'comma-dangle': 0,
      'prefer-template': 0,
      'object-shorthand': 0
    }
};
