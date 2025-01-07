// eslint.config.js
export default [
  {
    ignores: [], // Add ignored files/folders here, if needed
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 13, // Use ES2022 (ES13)
    },
    linterOptions: {
      noInlineConfig: false,
    },
  },
];
