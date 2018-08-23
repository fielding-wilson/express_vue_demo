const dataService = {
  get: () => ({
    addresses: {
      employer: {
        city: 'Durham',
        line1: '200 Davis Dr',
        line2: '',
        state: 'NC',
        zip: '27709',
      },
      mailing: {
        city: 'Raleigh',
        line1: 'PO Box 27',
        line2: '',
        state: 'NC',
        zip: '27609',
      },
      legal: {
        city: 'Raleigh',
        line1: '115 E Hargett St',
        line2: '',
        state: 'NC',
        zip: '27609',
      },
    },
    mailingSameAsLegal: 'true',
  }),
};

module.exports = dataService;
