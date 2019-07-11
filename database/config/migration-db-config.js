const config = require('config');

const envName = process.env.NODE_ENV || 'development';

module.exports = {
    [envName]: config.get('db')
};
