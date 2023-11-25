# Fractio Rem (@rubakas/fractio-rem)

> Fractional root element space and size scale for TailwindCSS

Install the plugin from npm:

```
$ npm install @rubakas/fractio-rem
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@rubakas/fractio-rem'),
    // ...
  ],
};
```

This plugin will extend spacing and sizing scale with fractional units:

```css
/* uning fractions of rem in your tailwind styles */
.my-component {
  @apply 
    m-3/4 /* 3/4 = 0.75rem margin */
    p-5/6 /* 5/6 = 0.833333rem padding */
    w-10/1 /* 10/1 = 10rem width */
    h-23/6 /* 23/6 = 3.833333rem height */
    ;
}
```

## License

@rubakas/fractio-rem is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
