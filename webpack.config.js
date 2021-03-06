let Encore = require('@symfony/webpack-encore');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    // Libs
    .addEntry('app', './assets/js/app.js')
    .addEntry('gallery', './assets/js/gallery/gallery.js')
    .addEntry('contact', './assets/js/contactform/contactform.js')

    // Libs
    .addStyleEntry('main-css', './assets/css/style.css')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    // .autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

if (Encore.isProduction()) {
    Encore
        // @see: https://github.com/NMFR/optimize-css-assets-webpack-plugin
        .addPlugin(new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.(c|s[ac])ss$/,
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: false
                    }
                }],
            },
            canPrint: true,
        }));
}

module.exports = Encore.getWebpackConfig();
