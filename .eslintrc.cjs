module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.tsx"
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: [
          './tsconfig.eslint.json',
          './packages/**/tsconfig.json',
          './apps/**/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
      },
    }
  ],
  root: true,
};