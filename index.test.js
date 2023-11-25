const path = require('path');
const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      // Default options for your plugin.
      fractioRem: {
        YOUR_PLUGIN_CUSTOM_OPTION: false,
      },
    },
    corePlugins: true,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities; .my-util { @apply m-3/6r h-12/4r w-3/4r; }', {
      from: `${path.resolve(__filename)}`,
    })
    .then(({ css }) => css);
}

test('utility classes can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`    
    .my-util {
      margin: 0.5rem;
      height: 3rem;
      width: 0.75rem;
    }
    `);
  });
});

// test('options can be customized', () => {
//   return generatePluginCss({
//     theme: {
//       fractioRem: {
//         YOUR_PLUGIN_CUSTOM_OPTION: true,
//       },
//     },
//   }).then(css => {
//     expect(css).toMatchCss(`    
//     .example-utility-class {
//       display: block
//     }
//     .custom-utility-class {
//       background-color: red
//     }
//     `);
//   });
// });