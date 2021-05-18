// .eslintrc.js
module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ["eslint:recommended"],
  overrides: [
    {
      // This configuration will apply only to Javascript
      files: ["**/*.js"],
      parser: "Esprima",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        amd: true, //// Enables require() and define() as global variables as per the amd spec.
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended", // React rules
        "plugin:react-hooks/recommended", // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
      ],
      rules: {
        // No need to import React when using Next.js
        "react/react-in-jsx-scope": "off",

        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",
      },
    },
  ],
}
