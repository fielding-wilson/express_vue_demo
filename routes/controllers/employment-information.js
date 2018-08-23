const dataService = require('../../services/data');

const employmentInformationController = {
  init: (req, res) => {
    res.renderVue('EmploymentInformation.vue', dataService.get(), {
      head: {
        title: 'Employment Information',
      },
    });
  },
};

module.exports = employmentInformationController;
