let mix = require('laravel-mix')

mix.js('src/js/scripts.js', 'assets/js')
.autoload({
jquery: ['$', 'window.jQuery']
});

mix.sass('src/scss/custom.scss', 'assets/css');