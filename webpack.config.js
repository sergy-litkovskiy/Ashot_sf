var Encore = require('@symfony/webpack-encore');

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
    .addEntry('jquery', './assets/js/lib/jquery/jquery.min.js')
    .addEntry('jquery-migrate', './assets/js/lib/jquery/jquery-migrate.min.js')
    .addEntry('bootstrap', './assets/js/lib/bootstrap/js/bootstrap.min.js')
    .addEntry('bootstrap-bundle', './assets/js/lib/bootstrap/js/bootstrap.bundle.min.js')
    .addEntry('easing', './assets/js/lib/easing/easing.min.js')
    .addEntry('hoverIntent', './assets/js/lib/superfish/hoverIntent.js')
    .addEntry('superfish', './assets/js/lib/superfish/superfish.min.js')
    .addEntry('wow', './assets/js/lib/wow/wow.min.js')
    .addEntry('waypoints', './assets/js/lib/waypoints/waypoints.min.js')
    .addEntry('acounteruppp', './assets/js/lib/counterup/counterup.min.js')
    .addEntry('isotope', './assets/js/lib/isotope/isotope.pkgd.min.js')
    .addEntry('lightbox', './assets/js/lib/lightbox/js/lightbox.min.js')
    .addEntry('touchSwipe', './assets/js/lib/touchSwipe/jquery.touchSwipe.min.js')

    .addEntry('gallery', './assets/js/gallery/gallery.js')
    .addEntry('app', './assets/js/main.js')

    // Libs
    .addStyleEntry('main-css', './assets/css/style.css')
    .addStyleEntry('bootstrap-css', './assets/js/lib/bootstrap/css/bootstrap.min.css')
    .addStyleEntry('font-awesome-css', './assets/js/lib/font-awesome/css/font-awesome.min.css')
    .addStyleEntry('animate-css', './assets/js/lib/animate/animate.min.css')
    .addStyleEntry('ionicons-css', './assets/js/lib/ionicons/css/ionicons.min.css')
    .addStyleEntry('lightbox-css', './assets/js/lib/lightbox/css/lightbox.min.css')

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
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
