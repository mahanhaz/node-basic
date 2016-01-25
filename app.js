'use strict';

var bootstrap = require('./bootstrap');
bootstrap.app.env = process.env;
bootstrap.app.rootPath = process.env.PWD;
bootstrap.app.config = require('./config.json');
bootstrap.start();
