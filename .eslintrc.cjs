module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'prettier',
      ],
      parserOptions: {
        project: [
          './tsconfig.eslint.json',
          './packages/**/tsconfig.json',
          './apps/**/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
      },
    },
  ],
  root: true,
};
