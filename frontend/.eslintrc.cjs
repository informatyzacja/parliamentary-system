module.exports = {
  extends: [
    "@alergeek-ventures/eslint-config/typescript",
    "@alergeek-ventures/eslint-config/react",
    "@alergeek-ventures/eslint-config/tests",
    "@alergeek-ventures/eslint-config/cspell-eslint",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["graphql.ts", "*.graphql", ".next", "node_modules", "*.js"],
  rules: {
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "no-magic-numbers": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "jest-dom/prefer-in-document": "off",
    "jest-dom/prefer-to-have-attribute": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
