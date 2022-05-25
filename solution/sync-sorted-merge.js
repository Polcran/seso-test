'use strict';

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const sortArr = logSources.sort((a, b) => {
    // Uncommnet line 10 and comment line 11 if you want to check times in
    // approach number 1 and 2.

    // return a.date - b.date;
    return b.date - a.date;
  });

  // 3rd place 🥉
  // sortArr.forEach((current) => {
  //   printer.print(current);
  // });

  // 2nd place 🥈
  // for (let i = 0; i < sortArr.length; i++) {
  //   printer.print(sortArr[i]);
  // }

  // Winner 🥇
  for (let i = sortArr.length - 1; i >= 0; i--) {
    printer.print(sortArr[i]);
  }

  printer.done();

  return console.log('/--------- Sync call done ----------/');
};
