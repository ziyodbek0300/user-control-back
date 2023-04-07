"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: ()=>dbConnection
});
const _logger = require("../../utils/logger");
const _env = require("../env");
const dbConnection = {
    url: _env.NODE_ENV === 'development' ? `mongodb://${_env.DB_HOST}:${_env.DB_PORT}/${_env.DB_DATABASE}` : `mongodb://${_env.DB_USER}:${_env.DB_PASSWORD}@${_env.DB_HOST}:${_env.DB_PORT}/${_env.DB_DATABASE}`,
    options: {
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    },
    error: (error)=>{
        if (error) {
            _logger.logger.error('DB: MongoDB Connection error:', error);
            process.exit(1);
        }
    }
};

//# sourceMappingURL=index.js.map