require('ts-node/register');
require('mocha');

module.exports = {
    exit: true,
    spec: ['lib/*.test.js'],
    extensions: ['ts', 'js'],
};