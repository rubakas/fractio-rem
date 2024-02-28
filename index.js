const plugin = require('tailwindcss/plugin');

function generateFractioSpacing(options = {}) {
  function range(startAt = 0, size = 1) {
    return [...Array(size).keys()].map(i => i + startAt);
  }

  const bases = options.bases || [1, 3, 4, 6, 8];
  const remsDetailed = options.remsDetailed || range(1, 6);
  const remsCore = options.remsCore || range(7, 10);
  const remsMore = options.remsMore || [18, 20, 24, 40];

  const result = {};

  for (let b = 0; b < bases.length; b++) {
    const currentBase = bases[b];

    for (let d = 0; d < remsDetailed.length; d++) {
      const currentRem = remsDetailed[d];
      for (let s = 0; s < currentBase; s++) {
        const currentStep = s + 1;

        const key = `${
          currentBase * (currentRem - 1) + currentStep
        }/${currentBase}r`;
        const value = `${
          (currentBase * (currentRem - 1) + currentStep) / currentBase
        }rem`;
        result[key] = value;
      }
    }

    for (let c = 0; c < remsCore.length; c++) {
      const currentRem = remsCore[c];
      const key = `${currentBase * currentRem}/${currentBase}r`;
      const value = `${currentRem}rem`;
      result[key] = value;
    }

    for (let m = 0; m < remsMore.length; m++) {
      const currentRem = remsMore[m];
      const key = `${currentBase * currentRem}/${currentBase}r`;
      const value = `${currentRem}rem`;
      result[key] = value;
    }
  }

  return result;
}

const fractioRem = plugin.withOptions(
  (options = {}) => function () {},
  options => ({
    theme: {
      extend: {
        spacing: generateFractioSpacing(options),
      },
    },
  }),
);

module.exports = fractioRem;
