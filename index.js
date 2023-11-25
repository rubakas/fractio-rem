const plugin = require('tailwindcss/plugin');

function generateFractioSpacing(options = {}) {
  function range(startAt = 0, size = 1) {
    return [...Array(size).keys()].map(i => i + startAt);
  };

  let bases        = options.bases        || [1,3,4,6];
  let remsDetailed = options.remsDetailed || range(1, 6);
  let remsCore     = options.remsCore     || range(7, 10);
  let remsMore     = options.remsMore     || [18, 20, 24, 40];

  let result = {};

  for(let b = 0; b < bases.length; b++) {
    let currentBase = bases[b];

    for(let d = 0; d < remsDetailed.length; d++) {
      let currentRem = remsDetailed[d];
      for(let s = 0; s < currentBase; s++) {
        let currentStep = s+1;

        let key = (currentBase * (currentRem - 1) + currentStep) + "/" + currentBase;
        let value = (currentBase * (currentRem - 1) + currentStep) / currentBase + "rem";
        result[key] = value;
      }
    }

    for(let c = 0; c < remsCore.length; c++) {
      let currentRem = remsCore[c];
      let key = currentBase * currentRem + "/" + currentBase;
      let value = currentRem + "rem";
      result[key] = value;
    }

    for(let m = 0; m < remsMore.length; m++) {
      let currentRem = remsMore[m];
      let key = currentBase * currentRem + "/" + currentBase;
      let value = currentRem + "rem";
      result[key] = value;
    }
  }

  return result;
}

const fractioRem = plugin.withOptions(
  function (options = {}) {
    return function() { }
  }, 
  function (options) {
    return {
      theme: {
        extend: {
          spacing: generateFractioSpacing(options)
        }
      },
    }
  }
)

module.exports = fractioRem;