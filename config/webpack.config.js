'use strict';

const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.NODE_ENV || process.env.IONIC_ENV || 'dev';

const aliases = Object.freeze({
    '@app': path.resolve(__dirname, '..', 'src', 'app/'),
    '@assets': path.resolve(__dirname, '..', 'src', 'assets/'),
    '@factories': path.resolve(__dirname, '..', 'src', 'app', 'factories/'),
    '@guards': path.resolve(__dirname, '..', 'src', 'app', 'guards/'),
    '@services': path.resolve(__dirname, '..', 'src', 'app', 'services/'),
    '@store': path.resolve(__dirname, '..', 'src', 'app', 'store/'),
    '@auth': path.resolve(__dirname, '..', 'src', 'app', 'pages', 'auth/'),
    '@competitions': path.resolve(__dirname, '..', 'src', 'app', 'pages/', 'competitions/'),
    '@events': path.resolve(__dirname, '..', 'src', 'app', 'pages', 'events/'),
    '@news': path.resolve(__dirname, '..', 'src', 'app', 'pages', 'news/'),
    '@teams': path.resolve(__dirname, '..', 'src', 'app', 'pages', 'teams/'),
    '@users': path.resolve(__dirname, '..', 'src', 'app', 'pages', 'users/'),
});

/**
 * Cannot setup IONIC_ENV manually only with --prod flag
 * however --prod automatically runs --aot and it cannot
 * be resolved, because ionic-app-scripts has an issues
 * with aliases, so wait when those issues will be
 * resolved
 */
useDefaultConfig[/*env*/'dev'].resolve.alias = aliases;
useDefaultConfig[/*env*/'prod'].resolve.alias = aliases;

/**
 *
 * @param {('dev'|'prod')} env
 * @returns {string}
 */
function environmentPath(env) {
    const filePath = path.resolve(__dirname, '..', 'src', 'environments', 'environment' + (env === 'prod' ? '' : '.' + env) + '.ts');

    if (fs.existsSync(filePath)) {
        return filePath;
    }

    console.error('%s environment file does not exists!', filePath);
    process.exit(1);
}

module.exports = function () {
    return useDefaultConfig;
};
