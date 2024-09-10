const { defineConfig } = require("cypress");

module.exports = defineConfig({
projectId: "q3y769",
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php",
    reporter: 'mochawesome',
      "reporterOptions": {
        "charts": true,
        "overwrite": false,
        "html": false,
        "json": true,
        "reportDir": "cypress/mochawesome-report"
      },

    setupNodeEvents(on, config) {
      
      },
    }
      
      
});
