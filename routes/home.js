const express = require('express');
const { getCookiesSettings } = require("../utils/get-cookies-settings");

const homeRouter = express.Router();

homeRouter
  .get('/', (req, res) => {
    const {sum, addons, base, allBases, allAddons} = getCookiesSettings(req);

    res.render('home/index', {
      cookie: {
        base,
        addons,
      },
      allBases,
      allAddons,
      sum,
    });
  });

module.exports = {
  homeRouter,
};
