const {defineConfig} = require('cypress');

module.exports = defineConfig({
  projectId: 'f2k7ef',
    e2e: {
        baseUrl: 'https://cars.vueling.com',
        viewportWidth: 430,
        viewportHeight: 932,
        video: false,
        defaultCommandTimeout: 15000,
        pageLoadTimeout: 90000,
        retries: {
            runMode: 1,
            openMode: 0
        },
        setupNodeEvents(on, config) {
            // optional: logs, screenshots, etc.
            return config;
        }
    }
});

