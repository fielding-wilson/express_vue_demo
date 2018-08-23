const appRoot = require('app-root-path');

module.exports = {
  rootPath: `${appRoot}/templates`,
  vueVersion: { disabled: true },
  head: {
    metas: [
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      },
    ],
    scripts: [
      { src: '/scripts/bundle.js' },
    ],
    styles: [
      { style: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0-rc.2/dist/css/foundation.min.css' },
    ],
  },
  template: {
    body: {
      start: '<body>',
      end: '</body>',
    },
  },
};
