'use strict';

const LogSource = require('./lib/log-source');
const Printer = require('./lib/printer');

function runSolutions(sourceCount) {
  return new Promise((resolve, reject) => {
    const syncLogSources = [];
    for (let i = 0; i < sourceCount; i++) {
      syncLogSources.push(new LogSource().pop());
    }
    try {
      require('./solution/sync-sorted-merge')(syncLogSources, new Printer());
      resolve();
    } catch (e) {
      reject(e);
    }
  }).then(() => {
    return new Promise((resolve, reject) => {
      const asyncLogSources = [];
      for (let i = 0; i < sourceCount; i++) {
        asyncLogSources.push(new LogSource().popAsync());
      }
      require('./solution/async-sorted-merge')(asyncLogSources, new Printer())
        .then(resolve)
        .catch(reject);
    });
  });
}

// Adjust this input to see how your solutions perform under various loads.
runSolutions(100);
