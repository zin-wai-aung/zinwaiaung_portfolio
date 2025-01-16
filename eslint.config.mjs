import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Temporarily disable rules to identify the issue
      "no-unused-vars": "off",
      "no-console": "off",
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false, // For JavaScript
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
];

export default eslintConfig;
