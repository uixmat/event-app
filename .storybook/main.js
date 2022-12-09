const path = require('path')
module.exports = {
  stories: [
    '../app/stories/**/*.mdx',
    '../app/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@tomfreudenberg/next-auth-mock/storybook'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    docsPage: true
  }
}
