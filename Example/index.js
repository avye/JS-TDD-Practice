export const zip = (...theArgs) => {
  // Check to ensure all arrays are same length
  let lengthCheck = theArgs.every(function(el) {
    return theArgs[0].length === el.length
  })
  // If they aren't, then return null
  if (lengthCheck === false) {
    return null;
  }

  // Create an array with the proper number of nested arrays
  let accumulator = theArgs[0].map(function() {
    return [];
  })

  // Zip up our arguments into our one array
  return theArgs.reduce(function(acc, el, index) {
    el.forEach(function(el, i) {
      acc[i].push(el);
    })
    return acc;
  }, accumulator);
};
