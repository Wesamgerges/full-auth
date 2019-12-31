'use strict'

/*
|--------------------------------------------------------------------------
| bootstrapVue Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for bootstrapVueCSS.
|
*/

module.exports = {
    bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    // componentPlugins: ['Button', 'Alert'], // Here you can specify which components you want to load and use
    // directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
}