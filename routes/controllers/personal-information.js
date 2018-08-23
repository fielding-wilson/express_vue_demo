const dataService = require('../../services/data');

const personalInformationController = {
  init: (req, res) => {
    res.renderVue('PersonalInformation.vue', dataService.get(), {
      head: {
        title: 'Personal Information',
      },
    });
  },
  post: (req, res) => {
    res.json({ nextPage: '/employment-information' });
  },
};

module.exports = personalInformationController;
