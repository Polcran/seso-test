'use strict';

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  //Wrap the logSources in a Promise.all to have the complete list done.
  return Promise.all(logSources)
    .then((arr) => {
      // Same winner approach as sync method to have better time results.
      const sortArr = arr.sort((a, b) => b.date - a.date);

      for (let i = sortArr.length - 1; i >= 0; i--) {
        printer.print(sortArr[i]);
      }

      printer.done();
      return console.log('/--------- Async call done ----------/');
    })
    .catch((error) => error);
};
