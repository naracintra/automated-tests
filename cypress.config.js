const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "dydqwm",
  reporter: "mochawesome",

  viewportWidth: 1200,
  viewportHeight: 800,

  reporterOptions: {
    reportDir: "cypress/report/mochaawesome",
    overwrite: false,
    html: true,
    json: false,
    timestamps: "mmddyyyy_HHMMss",
    reportTitle: "first test for newsela platform",
    cdn: true,
    charts: true,
    record: false,
    video: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
