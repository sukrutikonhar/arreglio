module.exports = {
  extends: ["next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "@next/next/next-script-for-ga": "off"
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  ignorePatterns: ["src/next-sitemap.config.js", "**/*.json"],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
}
