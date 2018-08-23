const router = require('express').Router();
const controllers = require('./controllers');

const createRoute = (route) => {
  router[route.method](route.path, route.controller);
};

const routeDetails = [
  { method: 'get', path: '/employment-information', controller: controllers.employmentInformation.init },
  { method: 'get', path: '/', controller: controllers.mainPage.init },
  { method: 'get', path: '/personal-information', controller: controllers.personalInformation.init },
  { method: 'post', path: '/personal-information', controller: controllers.personalInformation.post },
];

routeDetails.map(route => createRoute(route));

module.exports = router;
