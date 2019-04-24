var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config.js');
var sails = require('sails');

export  class JwtProvider {
    constructor(){};
    newToken: string;

    getToken(user: any) {
        return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
    };
    verify(token: string, callback: Function) {
        return jwt.verify(token, config.secretKey, callback);
    };
}

