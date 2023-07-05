require = require('esm')(module);
const routes = require('./src/routes.js');

module.exports = {
    pluginOptions: {
        sitemap: {
            urls: ['https://radiosurfm.com.ar',
                'https://radiosurfm.com.ar/noticias',],

        }
    }
}