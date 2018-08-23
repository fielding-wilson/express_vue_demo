const personalInformation = require('./personal-information');
const employmentInformation = require('./employment-information');
const mainPage = require('./main-page');

const controllers = {
  employmentInformation,
  mainPage,
  personalInformation,
};

module.exports = controllers;
