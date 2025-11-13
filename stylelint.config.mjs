// stylelint.config.mjs
import bemPlugin from 'stylelint-selector-bem-pattern';

export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss', bemPlugin],
  customSyntax: 'postcss-scss',
  rules: {
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[_a-z][a-z0-9-]*$',
    'scss/comment-no-empty': true,
    'selector-class-pattern': [
      '^[a-z][a-z0-9\\-]+$',
      {
        message: 'Class selectors should be lowercase and kebab-case (BEM-friendly)',
      },
    ],
    'plugin/selector-bem-pattern': {
      componentName: '[a-z]+(?:-[a-z]+)*',
      componentSelectors: {
        initial: '^\\.{{componentName}}(__[a-z]+(?:-[a-z]+)*)?(--[a-z]+(?:-[a-z]+)*)?$',
      },
    },
  },
};