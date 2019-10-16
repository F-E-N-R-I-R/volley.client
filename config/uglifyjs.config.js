const defaultConfig = require('@ionic/app-scripts/config/uglifyjs.config');

// todo: try this https://github.com/ionic-team/ionic-app-scripts/pull/1413/files
module.exports = {
    ...defaultConfig,
    mangle: false,
    compress: {
        ...defaultConfig.compress,
        properties: false,
        drop_console: true,
        drop_debugger: true,
    },
};

