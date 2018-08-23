const mainPageController = {
  init: (req, res) => {
    res.renderVue('MainPage.vue', '', {
      head: {
        title: 'SSR Vue with Express-Vue',
      },
    });
  },
};

module.exports = mainPageController;