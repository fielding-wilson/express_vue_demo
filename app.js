const express = require('express');
const expressVue = require('express-vue');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const vueOptions = require('./config/vue-options');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

app.use('/', routes);

module.exports = app;
