module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        proseWrap: "preserve",
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
    quotes: [
      1,
      "single",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    // Disabling because this rule is extremely slow.
    "import/no-cycle": "off",
    // Disabling because this rule is slow and not a common violation.
    "import/no-named-as-default": "off",
    // Disabling because this rule is slow and not a common violation.
    "import/no-named-as-default-member": "off",
    // This rule is already covered by the TypeScript compiler.
    "import/default": "off",
    // This rule is already covered by the TypeScript compiler.
    "import/no-unresolved": "off",
    "operator-linebreak": "off",
    "no-param-reassign": "off",
    "implicit-arrow-linebreak": "off",
    "max-len": "off",
    indent: "off",
    "no-shadow": "off",
    "arrow-parens": "off",
    "no-confusing-arrow": "off",
    "no-use-before-define": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/media-has-caption": "off",
    "object-curly-newline": [
      "off",
      {
        ObjectExpression: [
          "warn",
          {
            multiline: true,
            minProperties: 1,
          },
        ],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
