# Fractio Rem (@rubakas/fractio-rem)

> Fractional root element space and size scale

Install the plugin from npm:

```
$ npm install @rubakas/fractio-rem
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    fractioRem: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    fractioRem: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('@rubakas/fractio-rem'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

@rubakas/fractio-rem is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
