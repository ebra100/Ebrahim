module.exports.connections = {
    // mssql_connection: {
    //     host: 'eaa0e8a1-6e6c-4493-acf8-a7b60101a118.sqlserver.sequelizer.com',
    //     user: 'ssfwdwkfiosgmjlk',
    //     password: 'QuZitwhS4WiVctmiUkGBaWG5ij2FYcfcVF5uxpquKB8uTKjbwKBtX7w3V5ajDJ3Z',
    //     database: 'dbeaa0e8a16e6c4493acf8a7b60101a118',
    // }    
    sql_connection: {
        adapter: 'sails-mysql',
        host: 'test-database.cxjr6kc59axy.us-east-1.rds.amazonaws.com',
        user: 'NjHPGaCSVRtnadK', //optional
        password: "-yVP6Gj+rSuTugNQDCd$d96wuz#eBxbP", //optional
        database: 'gate_public' //optional
    },
    sql_connection_private: {
        adapter: 'sails-mysql',
        host: 'paymegate2.ccbamxztqcvh.us-east-1.rds.amazonaws.com',
        user: 'admingate1', //optional
        password: "root", //optional
        database: 'paymegate2' //optional
    }
};
module.exports.crypto = {
    key: ';AjoTpR![T.Jkj^"oSNZ!PhV5JiqRz',
    algorithm: 'aes-256-cbc'
};
module.exports.jwtSettings = {
    secret: '4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM'
};












