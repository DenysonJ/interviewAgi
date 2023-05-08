const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  numTestsKeptInMemory: 0,
  watchForFileChanges: false,
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
