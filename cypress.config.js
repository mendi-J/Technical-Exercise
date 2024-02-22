const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 120000,
    pageLoadTimeout: 300000,
    responseTimeout: 90000,
    requestTimeout: 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.zenithbank.com/",
  },
});
