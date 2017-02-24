const express = require('express'),
    morgan = require('morgan'),
    pug = require('pug'),
    methodOverride = require(method-override),
    pg = require('pg'),
    Sequelize = require('sequelize'),
    session = require('cookie-session'),
    bodyparser = require('body-parser');

var app = expres(),
    sequelize = new Sequelize('blogapplication', , process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, { dialect: 'postgres' });

