module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "react",
    "filenames",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    before: true,
    after: true,
    spyOn: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true,
    __ASSET_PREFIX__: true,
  },
  rules: {
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".js",
          ".jsx",
          ".react.js",
          ".react.jsx",
          ".ts",
          ".tsx",
          "react.ts",
          "react.tsx",
        ],
      },
    ],
    "consistent-return": ["error"],
    "filenames/match-regex": ["error", "^[a-zA-Z-0-9\\.]+$", true],
    "no-console": "warn",
    "no-inner-declarations": "off",
    "no-nested-ternary": "off",
    "prettier/prettier": "error",
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "warn",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/default-props-match-prop-types": [
      "error",
      { allowRequiredDefaults: true },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "no-unused-vars": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "desc", caseInsensitive: true },
      },
    ],
    "import/no-unresolved": "off",
    "import/extensions": ["error", "never", { css: "always" }],
  },
  overrides: [
    {
      files: [
        "packages/**/gatsby-browser.js",
        "packages/gatsby/cache-dir/**/*",
      ],
      env: {
        browser: true,
      },
      globals: {
        ___loader: false,
        ___emitter: false,
      },
    },
    {
      files: ["**/cypress/integration/**/*", "**/cypress/support/**/*"],
      globals: {
        cy: false,
        Cypress: false,
      },
    },
  ],
  settings: {
    react: {
      version: "16.4.2",
    },
  },
};
